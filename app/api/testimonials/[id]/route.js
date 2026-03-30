import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/require-auth";

export const dynamic = "force-dynamic";

export async function PUT(request, { params }) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!prisma) return NextResponse.json({ error: "Database not connected" }, { status: 503 });
  try {
    const { id } = await params;
    const body = await request.json();
    const testimonial = await prisma.testimonial.update({ where: { id }, data: body });
    return NextResponse.json(testimonial);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update testimonial" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!prisma) return NextResponse.json({ error: "Database not connected" }, { status: 503 });
  try {
    const { id } = await params;
    await prisma.testimonial.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete testimonial" }, { status: 500 });
  }
}
