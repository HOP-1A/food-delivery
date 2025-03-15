import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { usersId, orderItemsId, currentState } = body;
    const response = prisma.order.create({
      data: {
        usersId,
        orderItemsId,
        currentState,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to create Order => ${error}` },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const orders = await prisma.order.findMany();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to fetch => ${error}` },
      { status: 500 }
    );
  }
};

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const { id, orderItemsId, currentState } = body;
    const response = prisma.order.update({
      where: {
        id,
      },
      data: {
        orderItemsId,
        currentState,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to update Order => ${error}` },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: Request) => {
  try {
    const body = await req.json();
    const response = prisma.order.delete({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to delete Order => ${error}` },
      { status: 500 }
    );
  }
};
