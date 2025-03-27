"use client";

import { Menu, Pencil, ShoppingBag, Truck } from "lucide-react";

import HomePageItemComp from "./HomePageItemComp";
import { useRouter } from "next/navigation";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  const router = useRouter();
  const HomePageItem = () => {
    HomePageItemComp;
  };
  return (
    <div className="w-screen flex justify-between items-center px-4 bg-[rgb(245,235,220)] mb-15 drop-shadow-lg">
      <div className="flex gap-4 items-center">
        <Menu className="text-brown-700 w-6 h-6" />
        <div className="flex gap-2 bg-[#4D2C1D] text-white px-4 py-2 rounded-full items-center">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="flex items-center border border-brown-700 rounded-full px-2 py-0.5 text-xs bg-white">
          <div className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-brown-700" />
            <div>
              <div className="text-red-700 font-semibold leading-tight">
                Хүргэлтийн хаяг
              </div>
              <div className="text-brown-700 text-[10px] leading-tight">
                Хаягаа сонгоно уу
              </div>
            </div>
          </div>
          <div className="border-l border-brown-700 h-3 mx-1.5"></div>
          <button className="flex items-center gap-1 text-brown-700 cursor-pointer">
            <Pencil className="w-3.5 h-3.5" />
            <span className="font-medium leading-tight">Өөрчлөх</span>
          </button>
        </div>
      </div>
      <div className="w-20 h-20">
        <img src="https://www.burgerking.mn/assets/images/header-logo.png" />
      </div>
      <div className="flex gap-4 items-center mt-2">
        <button
          onChange={HomePageItem}
          onClick={() => router.push("/cart")}
          className="flex items-center gap-3 bg-red-700 text-white px-4 py-1 rounded-full text-base cursor-pointer"
        >
          <ShoppingBag className="w-7 h-7 text-white" />
          <span className="font-medium">Сагс</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
