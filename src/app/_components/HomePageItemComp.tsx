import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import { Products } from "../page";

export default function HPItemComp({ productData }: { productData: Products }) {
  return (
    <Card className="w-2/6 pr-1/12 pl-1/12 pb-1/12 pt-1/12 flex justify-center bg-amber-50 group relative overflow-hidden">
      <CardContent className="flex justify-center w-full relative">
        <img
          className="w-full transition-opacity duration-300 group-hover:opacity-30"
          src={productData.imgUrl}
          alt={productData.name}
        />

        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2/3 border-[1px] bg-green-600 flex items-center p-[10px] justify-center rounded-md gap-2.5">
            <ShoppingBag />
            <span className="text-sm text-white">Сагсанд хийх</span>
          </div>
        </button>
      </CardContent>

      <CardFooter className="flex flex-col mt-1/12 text-center">
        <CardTitle className="text-[24px] text-orange-900 font-black">
          {productData.name}
        </CardTitle>
        <CardDescription className="text-[24px] text-orange-900 font-black">
          {productData.price}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
