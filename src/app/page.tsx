"use client";
import { useEffect, useState } from "react";
import { CategoryComponent } from "./_components/HomePageCategoryComp";
import ProductItemComp from "./_components/HomePageItemComp";

export type Category = {
  id: string;
  categoryName: string;
  categoryImg: string;
  products: Products[];
}[];
export type Products = {
  id: string;
  price: number;
  name: string;
  description: string;
  imgUrl: string;
  categoryId: string;
};

const HomePage = () => {
  const [categories, setCategories] = useState<Category>([]);

  const getCategories = async () => {
    const response = await fetch("/api/product/getAllCategory");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="bg-[rgb(245,235,220)] min-h-screen flex justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-[80%]">
        <div
          className="w-full h-[420px] bg-[url(https://storage.googleapis.com/bk-delivery/images/UBv3FTXV6f0bB7Bggce44Dkj2BeOLEMX6xTtpzkm.jpg)]
          bg-contain  bg-center bg-no-repeat mb-8"
        ></div>
        {categories.length == 0 ? (
          <div className="text-[#502314] text-[30px] font-bold">Loading...</div>
        ) : (
          <div className="flex gap-16 w-5/6">
            <div>
              <CategoryComponent categoryData={categories} />
            </div>
            <div className="w-4/5 flex flex-col">
              {categories.map((category, index) => (
                <div key={index}>
                  <div className="text-[21px] text-[#502314] font-extrabold mb-5 mt-1">
                    {category.categoryName}
                  </div>
                  <div className="w-full flex flex-wrap gap-6">
                    {category.products.map((product, index) => (
                      <ProductItemComp key={index} productData={product} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
