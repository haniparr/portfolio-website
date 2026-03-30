import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/require-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!prisma) return NextResponse.json([]);
  try {
    const clients = await prisma.client.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
    return NextResponse.json(clients);
  } catch (error) {
    console.warn("GET /api/clients:", error.message);
    return NextResponse.json([]);
  }
}

export async function POST(request) {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!prisma) return NextResponse.json({ error: "Database not connected" }, { status: 503 });
  try {
    const body = await request.json();
    const client = await prisma.client.create({ data: body });
    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 });
  }
}
