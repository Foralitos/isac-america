import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();

    // Validación básica
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 6 caracteres" },
        { status: 400 }
      );
    }

    await connectMongo();

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email: email.toLowerCase() }).select("+password");

    if (existingUser) {
      console.log("🔍 Usuario existente encontrado:", {
        email: existingUser.email,
        hasPassword: !!existingUser.password,
        _id: existingUser._id
      });

      // Si existe pero sin password (creado por Stripe), actualizar con password
      if (!existingUser.password) {
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("💾 Intentando actualizar password...");

        // Usar findByIdAndUpdate para forzar actualización (fix para select: false)
        await User.findByIdAndUpdate(
          existingUser._id,
          {
            $set: {
              password: hashedPassword,
              name: name || existingUser.name,
              emailVerified: new Date(),
              lastLogin: new Date(),
            }
          },
          { new: true }
        );

        console.log("✅ Password actualizada exitosamente para:", email);

        return NextResponse.json({
          success: true,
          message: "Contraseña establecida exitosamente",
        });
      }

      console.log("⚠️ Usuario ya tiene password");
      return NextResponse.json(
        { error: "Este email ya está registrado. Inicia sesión en su lugar." },
        { status: 400 }
      );
    }

    // Crear nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email: email.toLowerCase(),
      password: hashedPassword,
      name: name || email.split("@")[0],
      role: "user",
      emailVerified: new Date(),
      lastLogin: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Usuario creado exitosamente",
      userId: newUser._id,
    });
  } catch (error) {
    console.error("Error in signup:", error);
    return NextResponse.json(
      { error: "Error al crear usuario" },
      { status: 500 }
    );
  }
}
