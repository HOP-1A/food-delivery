import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { productsId } = body;
    const response = prisma.orderItems.create({
      data: {
        productsId,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to create OrderItems => ${error}` },
      { status: 500 }
    );
  }
};

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const { id, productsId } = body;
    const response = prisma.orderItems.update({
      where: {
        id,
      },
      data: {
        productsId,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to update OrderItems => ${error}` },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: Request) => {
  try {
    const body = await req.json();
    const response = prisma.orderItems.delete({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to delete OrderItems => ${error}` },
      { status: 500 }
    );
  }
};
