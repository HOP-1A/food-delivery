"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type dataType = {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
  price: number;
};

export const CartContent = ({ data }: { data: dataType }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const cartItemsString = localStorage.getItem("cart");
    if (cartItemsString) {
      const cartItems: { count: number; data: dataType }[] =
        JSON.parse(cartItemsString);
      const existingItem = cartItems.find((item) => item.data.id === data.id);
      if (existingItem) {
        setCount(existingItem.count);
      }
    }
  }, [data.id]);

  const handleDelete = () => {
    localStorage.removeItem("cart");
  };

  const updateCartInStorage = (newCount: number) => {
    const cartItemsString = localStorage.getItem("cart");
    let cartItems: { count: number; data: dataType }[] = [];

    if (cartItemsString) {
      cartItems = JSON.parse(cartItemsString);
    }

    const existingItemIndex = cartItems.findIndex(
      (item) => item.data.id === data.id
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].count = newCount;
    } else {
      cartItems.push({ count: newCount, data });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const plusCount = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      updateCartInStorage(newCount);
      return newCount;
    });
  };

  const minusCount = () => {
    if (count > 1) {
      setCount((prev) => {
        const newCount = prev - 1;
        updateCartInStorage(newCount);
        return newCount;
      });
    }
  };

  return (
    <div className="w-4/6 bg-white h-[350px] border-2 rounded-2xl p-4">
      <div className="flex h-2/3">
        <div className="p-4">
          <img src={data.imgUrl} width={200} height={150} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-sans text-amber-950 text-3xl font-extrabold">
            {data.name}
          </div>
          <div className="font-sans text-amber-950 text-lg font-bold">
            Бүтээгдэхүүний мэдээлэл
          </div>
          <div className="text-xl text-amber-950">{data.description}</div>
        </div>
      </div>
      <div className="flex justify-between mt-2 border-b-2 border-neutral-600 pb-3">
        <div className="text-xl font-sans text-amber-950 font-bold">
          Нийт дүн
        </div>
        <div className="text-xl font-sans text-amber-950 font-bold">
          {data.price * count}₮
        </div>
      </div>
      <div className="flex justify-between mb-4 mt-4">
        <div className="flex gap-2 items-center">
          <div className="border-r-2 border-black"></div>
          <div className="flex gap-1 text-red-600 rounded-md p-1 justify-center items-center">
            <X />
            <button className="text-lg font-sans" onClick={handleDelete}>
              Устгах
            </button>
          </div>
        </div>
        <div className="flex items-center">
          {count > 1 && (
            <button
              className="bg-amber-950 w-8 h-8 rounded-md text-white text-center font-bold text-xl hover:cursor-pointer"
              onClick={minusCount}
            >
              -
            </button>
          )}
          <div className="w-8 h-8 text-center text-xl font-sans font-bold">
            {count}
          </div>
          <button
            className="bg-red-600 w-8 h-8 rounded-md text-white text-center font-bold text-xl hover:cursor-pointer"
            onClick={plusCount}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
