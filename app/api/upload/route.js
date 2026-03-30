import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { requireAuth } from "@/lib/require-auth";

export const dynamic = "force-dynamic";

export const maxDuration = 60;

export async function POST(request) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
    }

    const result = await uploadToCloudinary(file, "portfolio");

    return NextResponse.json({ success: true, url: result.url, publicId: result.publicId });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
