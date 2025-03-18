import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
type ProductDataType = {
  productCover: string;
  productName: string;
  productPrice: string;
};
import { ShoppingBag } from "lucide-react";
export default function HPItemComp(productData: ProductDataType) {
  return (
    <div>
      <Card className="w-1/6 pr-1/12 pl-1/12 pb-1/12 pt-1/12 flex justify-center bg-amber-50 group">
        <CardContent className="flex justify-center w-full">
          <img
            className="w-full"
            src={productData.productCover}
            alt={productData.productName}
          ></img>
        </CardContent>

        <CardFooter className="flex flex-col mt-1/12">
          <CardTitle className="text-[24px] text-orange-900 h-max text-center font-black">
            {productData.productName}
          </CardTitle>
          <CardDescription className="text-[24px] text-orange-900 font-black">
            {productData.productPrice}
          </CardDescription>
          <button className="hidden group-hover:flex w-2/3 border-[1px] bg-green-600 md:flex items-center p-[8px] justify-center rounded-md gap-2.5 mt-1.5">
            <ShoppingBag />
            <span className="text-sm text-white">Сагсанд хийх</span>
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
