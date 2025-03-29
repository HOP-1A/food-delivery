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
    <div className="w-screen flex  items-center px-4  bg-[rgb(245,235,220)] mb-15 drop-shadow-lg">
      <div className="flex gap-4 items-center mr-[610px]">
        <Menu className="text-brown-700 w-6 h-6" />
        <div className="flex gap-2 bg-[#4D2C1D] text-white rounded-full items-center justify-center p-[11px] h-[50px] w-[150px]">
          <SignedOut>
            <SignInButton />
            <div>|</div>
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="flex items-center border  rounded-full  text-xs bg-white h-[50px] w-[240px] border-[rgb(80,35,20)] justify-center ">
          <div className="flex items-center gap-1">
            <Truck className="w-5 h-5 text-brown-700" />
            <div>
              <div className="text-red-700 font-semibold leading-tight">
                Хүргэлтийн хаяг
              </div>
              <div className="text-brown-700 text-[10px] leading-tight">
                Хаягаа сонгоно уу
              </div>
            </div>
          </div>
          <div className=" border-brown-700  mx-1.5">|</div>
          <button className="flex items-center gap-1 text-brown-700 cursor-pointer">
            <Pencil className="w-3.5 h-3.5" />
            <span className="font-medium leading-tight">Өөрчлөх</span>
          </button>
        </div>
      </div>
      <div className="w-20 h-20 mr-[960px]">
        <img
          src="https://www.burgerking.mn/assets/images/header-logo.png"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex gap-4 items-center mt-2">
        <button
          onChange={HomePageItem}
          onClick={() => router.push("/cart")}
          className="flex items-center gap-3 bg-red-700 text-white px-4 py-2 rounded-full text-base cursor-pointer"
        >
          <ShoppingBag className="w-7 h-7 text-white" />
          <span className="font-medium">Сагс</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
