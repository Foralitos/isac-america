import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// USER SCHEMA
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      private: true,
    },
    image: {
      type: String,
    },
    // Role-based access control
    role: {
      type: String,
      enum: ["user", "admin", "editor", "moderator"],
      default: "user",
    },
    // Email verification timestamp (set when user verifies via any provider)
    emailVerified: {
      type: Date,
      default: null,
    },
    // Last login timestamp (updated on every authentication)
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    // Password for email/password authentication (hashed with bcrypt)
    password: {
      type: String,
      select: false, // No incluir en queries por defecto (seguridad)
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

export default mongoose.models.User || mongoose.model("User", userSchema);
