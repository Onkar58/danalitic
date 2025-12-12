import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await addDoc(collection(db, "contact-enquiries"), {
      ...body,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Firestore error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save enquiry" },
      { status: 500 },
    );
  }
}
