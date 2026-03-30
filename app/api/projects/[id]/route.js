import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/require-auth";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  if (!prisma) return NextResponse.json({ error: "Database not connected" }, { status: 503 });
  try {
    const { id } = await params;
    const project = await prisma.project.findUnique({
      where: { id },
      include: { sections: { orderBy: { order: "asc" } }, credits: true },
    });
    if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!prisma) return NextResponse.json({ error: "Database not connected" }, { status: 503 });
  try {
    const { id } = await params;
    const body = await request.json();
    const { sections = [], credits = [], ...data } = body;

    await prisma.projectSection.deleteMany({ where: { projectId: id } });
    await prisma.projectCredit.deleteMany({ where: { projectId: id } });

    const project = await prisma.project.update({
      where: { id },
      data: {
        ...data,
        sections: { create: sections.map((s, i) => ({ ...s, order: i })) },
        credits: { create: credits },
      },
      include: { sections: { orderBy: { order: "asc" } }, credits: true },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("PUT /api/projects/[id] error:", error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!prisma) return NextResponse.json({ error: "Database not connected" }, { status: 503 });
  try {
    const { id } = await params;
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!prisma) return NextResponse.json({ error: "Database not connected" }, { status: 503 });
  try {
    const { id } = await params;
    const body = await request.json();
    const project = await prisma.project.update({ where: { id }, data: body });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}
