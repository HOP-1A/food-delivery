import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const response = await prisma.products.findMany({
      where: { category: body.category },
    });
    return NextResponse.json(response);
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
};
