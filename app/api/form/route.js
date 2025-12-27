import { NextResponse } from "next/server";
import Form from "@/models/formmodel";
import dbConnect from "@/libs/dbconnect";

export async function POST(req) {
  try {
    await dbConnect();

    const { userName, email, message } = await req.json();

    if (!userName || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await Form.create({ userName, email, message });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
