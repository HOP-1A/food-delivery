"use client";

import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

type dataType = {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
  price: number;
};

const Header = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<
    { count: number; data: dataType }[]
  >([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartItemsString = localStorage.getItem("cart");
      const parsedCart = cartItemsString ? JSON.parse(cartItemsString) : [];
      setCartItems(parsedCart);
    }
  }, []);

  useEffect(() => {
    const count =
      cartItems.length > 0
        ? cartItems.reduce((sum, item) => sum + item.count, 0)
        : 0;
    setTotalCount(count);
  }, [cartItems]);

  return (
    <div className="w-screen flex items-center px-4 bg-[rgb(245,235,220)] mb-15 drop-shadow-lg justify-between">
      <div className="flex gap-4 items-center ml-6">
        <div className="flex gap-2 bg-[#4D2C1D] text-white rounded-lg items-center justify-center pr-6 pl-6 pb-2 pt-2">
          <SignedOut>
            <SignInButton>
              <button className="flex gap-2 items-center justify-center">
                <CircleUser />
                <div className="text-lg font-bold">Нэвтрэх</div>
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="w-20 h-20">
        <img
          src="https://www.burgerking.mn/assets/images/header-logo.png"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center mt-2 w-[150px] relative">
        <button
          onClick={() => router.push("/cart")}
          className="flex items-center gap-3 bg-red-700 text-white px-4 py-2 rounded-xl text-base cursor-pointer relative"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNob3BwaW5nLWJhc2tldC1pY29uIGx1Y2lkZS1zaG9wcGluZy1iYXNrZXQiPjxwYXRoIGQ9Im0xNSAxMS0xIDkiLz48cGF0aCBkPSJtMTkgMTEtNC03Ii8+PHBhdGggZD0iTTIgMTFoMjAiLz48cGF0aCBkPSJtMy41IDExIDEuNiA3LjRhMiAyIDAgMCAwIDIgMS42aDkuOGEyIDIgMCAwIDAgMi0xLjZsMS43LTcuNCIvPjxwYXRoIGQ9Ik00LjUgMTUuNWgxNSIvPjxwYXRoIGQ9Im01IDExIDQtNyIvPjxwYXRoIGQ9Im05IDExIDEgOSIvPjwvc3ZnPg=="
            alt="cart"
          />
          <span className="font-medium">Сагс</span>

          {totalCount > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-brown-900 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full bg-amber-950">
              {totalCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
