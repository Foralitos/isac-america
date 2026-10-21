import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import config from "@/config";
import connectMongo from "./mongo";
import connectMongoose from "./mongoose";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Set any random key in .env.local
  secret: process.env.NEXTAUTH_SECRET,

  // Providers for authentication
  providers: [
    // Credentials Provider for email + password login (no email sending required)
    ...(connectMongo
      ? [
          CredentialsProvider({
            id: "credentials",
            name: "Email y Contraseña",
            credentials: {
              email: { label: "Email", type: "email" },
              password: { label: "Contraseña", type: "password" },
            },
            async authorize(credentials) {
              if (!credentials?.email || !credentials?.password) {
                throw new Error("Email y contraseña son requeridos");
              }

              await connectMongoose();
              const User = (await import("@/models/User")).default;

              // Buscar usuario con password (select: false requiere +password)
              const user = await User.findOne({
                email: credentials.email.toLowerCase(),
              }).select("+password");

              if (!user) {
                throw new Error("Usuario no encontrado");
              }

              // Si no tiene password, puede ser usuario de Google o Stripe sin password
              if (!user.password) {
                // Verificar si tiene imagen de Google para determinar si es cuenta Google o Stripe
                if (
                  user.image &&
                  user.image.includes("googleusercontent.com")
                ) {
                  throw new Error("Esta cuenta usa Google para iniciar sesión");
                } else {
                  throw new Error(
                    "Esta cuenta no tiene contraseña. Por favor crea una cuenta primero usando 'Crear Cuenta'.",
                  );
                }
              }

              // Verificar password
              const isValid = await bcrypt.compare(
                credentials.password,
                user.password,
              );

              if (!isValid) {
                throw new Error("Contraseña incorrecta");
              }

              // Actualizar lastLogin
              user.lastLogin = new Date();
              await user.save();

              return {
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                image: user.image,
                role: user.role,
                emailVerified: user.emailVerified,
                lastLogin: user.lastLogin,
              };
            },
          }),
          GoogleProvider({
            // Follow the "Login with Google" tutorial to get your credentials
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            // Allow linking accounts with same email (must be in provider, not global config)
            allowDangerousEmailAccountLinking: true,
            async profile(profile) {
              return {
                id: profile.sub,
                name: profile.given_name ? profile.given_name : profile.name,
                email: profile.email,
                image: profile.picture,
                role: "user",
                createdAt: new Date(),
                emailVerified: new Date(), // Google pre-verifies all emails
                lastLogin: new Date(),
              };
            },
          }),
        ]
      : []),
  ],

  // New users will be saved in Database (MongoDB Atlas). Each user (model) has some fields like name, email, image, etc..
  // Requires a MongoDB database. Set MONGODB_URI env variable.
  // Learn more about the model type: https://authjs.dev/concepts/database-models
  ...(connectMongo && { adapter: MongoDBAdapter(connectMongo) }),

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Include user role and verification info in JWT token
      if (user) {
        token.role = user.role || "user";
        token.emailVerified = user.emailVerified;
        token.lastLogin = user.lastLogin;
      }

      // Refresh user data if session is updated
      if (trigger === "update" && session?.user) {
        try {
          await connectMongoose();
          const dbUser = await User.findById(token.sub);
          if (dbUser) {
            token.role = dbUser.role || "user";
            token.emailVerified = dbUser.emailVerified;
            token.lastLogin = dbUser.lastLogin;
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user && token.sub) {
        session.user.id = token.sub;

        // Always fetch fresh user data from database
        try {
          await connectMongoose();
          const dbUser = await User.findById(token.sub);
          if (dbUser) {
            session.user.role = dbUser.role || "user";
            session.user.emailVerified = dbUser.emailVerified;
            session.user.lastLogin = dbUser.lastLogin;
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          session.user.role = token.role || "user";
        }
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account && user) {
        try {
          await connectMongoose();
          const User = (await import("@/models/User")).default;

          // CREDENTIALS PROVIDER: Usuario ya validado en authorize()
          if (account.provider === "credentials") {
            // No hacer nada, ya se validó y actualizó lastLogin en authorize()
            return true;
          }

          // GOOGLE PROVIDER: Update existing user or create new one
          if (account.provider === "google") {
            await User.findOneAndUpdate(
              { email: user.email },
              {
                lastLogin: new Date(),
                emailVerified: new Date(),
              },
              { upsert: true }, // Crear si no existe
            );
          }
        } catch (error) {
          console.error("Error in signIn callback:", error);
        }
      }
      return true;
    },
  },

  // Custom pages for branded signin experience
  pages: {
    signIn: "/signin",
    error: "/signin",
  },

  events: {
    async createUser({ user }) {
      // Ensure all newly created users have a role
      if (!user.role) {
        try {
          await connectMongoose();
          await User.findByIdAndUpdate(user.id, { role: "user" });
        } catch (error) {
          console.error("Error setting default role for new user:", error);
        }
      }
    },
  },

  session: {
    strategy: "jwt",
  },
  theme: {
    brandColor: config.colors.main,
    // Add you own logo below. Recommended size is rectangle (i.e. 200x50px) and show your logo + name.
    // It will be used in the login flow to display your logo. If you don't add it, it will look faded.
    logo: `https://${config.domainName}/logoAndName.png`,
  },
});
