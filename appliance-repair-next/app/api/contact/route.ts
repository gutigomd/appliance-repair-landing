import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(json);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return NextResponse.json(
      {
        message: "Validation error.",
        fieldErrors
      },
      { status: 400 }
    );
  }

  const data = result.data;

  // Simulate async side-effect (e.g., saving to DB, sending email)
  await new Promise((resolve) => setTimeout(resolve, 300));

  // In real app you'd remove console.log and integrate with service
  console.log("Contact submission:", data);

  return NextResponse.json({ success: true }, { status: 200 });
}

