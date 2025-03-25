"use client";
import { ArrowLeft, ArrowRight, CirclePlus, Trash2 } from "lucide-react";
import { CartContent } from "../_components/CartContent";
import { useEffect } from "react";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    const cartItemsString = localStorage.getItem("cart");
    if (!cartItemsString) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  return (
    <div className="bg-[rgb(245,235,220)] min-h-screen flex flex-col items-center">
      <div className="w-4/6">
        <div className="flex justify-between pb-4">
          <div className="font-bold text-3xl">Миний сагс</div>
          <div className="flex gap-4">
            <Link
              className="flex bg-green-700 rounded-md text-white p-2 gap-2 font-bold hover:cursor-pointer"
              href={"/"}
            >
              <CirclePlus />
              <div>Бүтээгдэхүүн нэмэх</div>
            </Link>
            <div
              className="flex bg-amber-950 rounded-md text-white p-2 gap-2 font-bold hover:cursor-pointer"
              onClick={clearCart}
            >
              <Trash2 />
              <div>Сагс хоослох</div>
            </div>
          </div>
        </div>

        <CartContent />

        <div className="flex justify-between mt-8 mb-8">
          <Link
            className="flex bg-amber-950 rounded-md text-white p-2 gap-2 hover:cursor-pointer"
            href={"/"}
          >
            <ArrowLeft />
            <div>Өмнөх алхам руу буцах</div>
          </Link>
          <Link
            className="flex bg-red-600 rounded-md text-white p-2 gap-2 hover:cursor-pointer"
            href={"/order"}
          >
            <div>Үргэлжүүлэх</div>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
