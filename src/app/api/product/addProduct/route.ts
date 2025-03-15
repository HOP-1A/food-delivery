import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { name, price, description, imgUrl, usersId } = body;
    const response = await prisma.products.create({
      data: {
        name,
        price,
        description,
        imgUrl,
        usersId,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to create Product => ${error}`,
      },
      { status: 500 }
    );
  }
};
