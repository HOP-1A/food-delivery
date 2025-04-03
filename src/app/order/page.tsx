"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Hotel,
  Building2,
  MapPinHouse,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
type ProductType = {
  price: number;
};

type DataType = {
  count: number;
  data: ProductType;
}[];

export default function OrderAddressPage() {
  const [officeORApartmentValue, setOfficeORApartmentValue] = useState("");
  const [isOfficeValue, setIsOfficeValue] = useState<boolean>();
  const [addressValue, setAddressValue] = useState<string>("");
  const [ortsValue, setOrtsValue] = useState<string>("");
  const [floorValue, setFloorValue] = useState<string>();
  const [houseNumberValue, setHouseNumberValue] = useState<string>();
  const [additionalInfo, setAdditionalInfo] = useState<string>();
  const [additionalPhoneValue, setAdditionalPhoneValue] = useState<string>();
  const [phoneValue, setPhoneValue] = useState<string>();
  const [orderData, setOrderData] = useState<DataType>([]);
  const [addressArray, setAddressArray] = useState<Array<string>>();
  const onOfficeORApartmentClick = (value: SetStateAction<string>) => {
    setOfficeORApartmentValue(value);
    if (value === "Оффис") {
      setIsOfficeValue(true);
    } else {
      setIsOfficeValue(false);
    }
  };
  const ClickedDone = () => {
    if (officeORApartmentValue === "Оффис") {
      setAddressArray([
        officeORApartmentValue +
          " " +
          addressValue +
          " " +
          floorValue +
          " " +
          houseNumberValue +
          " " +
          additionalInfo +
          " " +
          phoneValue +
          " " +
          additionalPhoneValue,
      ]);
    } else {
      setAddressArray([
        officeORApartmentValue +
          " " +
          ortsValue +
          " " +
          addressValue +
          " " +
          floorValue +
          " " +
          houseNumberValue +
          " " +
          additionalInfo +
          " " +
          phoneValue +
          " " +
          additionalPhoneValue,
      ]);
    }
  };
  const HandleAddressValue = (e: { target: { value: string } }) => {
    setAddressValue(e.target.value);
  };
  const HandleOrtsValue = (e: { target: { value: string } }) => {
    setOrtsValue(e.target.value);
  };
  const HandleFloorValue = (e: { target: { value: string } }) => {
    setFloorValue(e.target.value);
  };
  const HandlehouseNumberValue = (e: { target: { value: string } }) => {
    setHouseNumberValue(e.target.value);
  };
  const HandleAdditionalInfoValue = (e: { target: { value: string } }) => {
    setAdditionalInfo(e.target.value);
  };
  const HandlePhoneValue = (e: { target: { value: string } }) => {
    setPhoneValue(e.target.value);
  };
  const HandleAdditionalPhoneValue = (e: { target: { value: string } }) => {
    setAdditionalPhoneValue(e.target.value);
  };
  const getTotalPriceFromCart = (): number => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        return cartItems.reduce((total: number, item: any) => {
          return total + item.count * item.data.price;
        }, 0);
      }
    } catch (error) {
      console.error("Error retrieving total price from cart:", error);
    }
    return 0;
  };

  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    setTotalPrice(getTotalPriceFromCart());
  }, []);
  return (
    <div className="flex flex-col h-screen items-center bg-[rgb(245,235,220)]">
      <div className="w-[70%]">
        <div className="text-amber-950 font-extrabold text-[20px]">
          ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ
        </div>
        <div>
          <div>
            <span className="text-[13px] text-amber-950 font-extrabold">
              Хүргэлтийн хаяг
            </span>
            <div className="flex items-center h-[45px] w-[850px]  bg-white border-gray-500 rounded-sm gap-1">
              <MapPinHouse className="h-[20px]" />
              <div className="border-[1px] border-amber-950 h-[20px] rounded-sm"></div>
              <div className="w-[650px] flex justify-between">
                <input
                  placeholder="Хаягаа бичнэ үү"
                  className="text-xs w-[650px] p-1 outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-extrabold"
                  value={addressValue}
                  onChange={HandleAddressValue}
                />
              </div>
            </div>
          </div>
          <div className="w-[850px]">
            <RadioGroup
              onValueChange={(value) => onOfficeORApartmentClick(value)}
            >
              <span className="text-[13px] text-amber-950 font-extrabold mt-[20px]">
                Хаягийн төрөл
              </span>
              <div className="flex gap-2 justify-between">
                <div className="flex items-center h-[45px] w-[420px] bg-white border-gray-500 rounded-sm">
                  <Hotel className="h-[20px]" />
                  <div className="border-[1px] border-amber-950 h-[20px] rounded-sm"></div>
                  <div className="w-[305px] flex justify-between">
                    <Label
                      htmlFor="option-one"
                      className="text-xs  text-amber-950 font-normal"
                    >
                      Орон сууц
                    </Label>
                    <RadioGroupItem
                      value="Орон сууц"
                      id="option-one"
                      className="border-black border-[1px] "
                    ></RadioGroupItem>
                  </div>
                </div>
                <div className="flex items-center h-[45px] w-[420px] bg-white border-gray-500 rounded-sm gap-1">
                  <Building2 className="h-[20px]" />
                  <div className="border-[1px] border-amber-950 h-[20px] rounded-sm"></div>
                  <div className="w-[305px] flex justify-between">
                    <Label
                      htmlFor="option-two"
                      className="text-xs  text-amber-950 font-normal"
                    >
                      Оффис
                    </Label>
                    <RadioGroupItem
                      value="Оффис"
                      id="option-two"
                      className="border-black border-[1px]"
                    ></RadioGroupItem>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center gap-2">
            {isOfficeValue ? (
              <div className="flex w-[425px] gap-1.5">
                <div className="flex flex-col mt-[30px]">
                  <span className="text-[13px] text-amber-950 font-extrabold">
                    Давхар
                  </span>
                  <input
                    className="w-[207px] h-[45px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-normal"
                    placeholder="№..."
                    onChange={HandleFloorValue}
                    value={floorValue}
                  />
                </div>
                <div className="flex flex-col mt-[30px]">
                  <span className="text-[13px] text-amber-950 font-extrabold">
                    Тоот
                  </span>
                  <input
                    className="w-[207px] h-[45px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-normal"
                    placeholder="№..."
                    onChange={HandlehouseNumberValue}
                    value={houseNumberValue}
                  />
                </div>
              </div>
            ) : (
              <div className="flex w-[425px] gap-1">
                <div className="flex flex-col mt-[30px]">
                  <span className="text-[13px] text-amber-950 font-extrabold">
                    Орц
                  </span>
                  <input
                    className="w-[137px] h-[45px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-normal"
                    placeholder="№..."
                    onChange={HandleOrtsValue}
                    value={ortsValue}
                  />
                </div>
                <div className="flex flex-col mt-[30px]">
                  <span className="text-[13px] text-amber-950 font-extrabold">
                    Давхар
                  </span>
                  <input
                    className="w-[137px] h-[45px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-normal"
                    placeholder="№..."
                    onChange={HandleFloorValue}
                    value={floorValue}
                  />
                </div>
                <div className="flex flex-col mt-[30px]">
                  <span className="text-[13px] text-amber-950 font-extrabold">
                    Тоот
                  </span>
                  <input
                    className="w-[137px] h-[45px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-normal"
                    placeholder="№..."
                    onChange={HandlehouseNumberValue}
                    value={houseNumberValue}
                  />
                </div>
              </div>
            )}
            <div className="flex w-[425px] gap-1">
              <div className="flex flex-col mt-[30px]">
                <span className="text-[13px] text-amber-950 font-extrabold">
                  Хаягийн нэмэлт тайлбар
                </span>
                <input
                  placeholder="Орцны код ... гэх мэт"
                  className="text-xs text-amber-950 font-medium placeholder:font-normal w-[417px] h-[45px] placeholder-amber-950 border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5"
                  value={additionalInfo}
                  onChange={HandleAdditionalInfoValue}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 h-[70px] w-[850px] ">
            <div className="flex flex-col mt-[30px]">
              <span className="text-[13px] text-amber-950 font-extrabold">
                Утасны дугаар
              </span>
              <div className=" w-[420px] h-[45px] border-gray-500 rounded-sm bg-white flex items-center">
                <Phone className="h-[20px]" />
                <div className="border-[1px] border-amber-950 h-[20px]"></div>
                <input
                  placeholder="Утасны дугаар"
                  className="text-xs text-amber-950 font-medium placeholder:font-normal w-[300px] h-[45px] placeholder-amber-950 outline-0 bg-white placeholder:text-sm p-1.5"
                  onChange={HandlePhoneValue}
                  value={phoneValue}
                />
              </div>
            </div>
            <div className="flex flex-col mt-[50px]">
              <span className="text-[13px] text-amber-950 font-normal"></span>
              <div className=" w-[420px] h-[45px] border-gray-500 rounded-sm bg-white flex items-center">
                <Phone className="h-[20px]" />
                <div className="border-[1px] border-amber-950 h-[20px]"></div>
                <input
                  placeholder="Нэмэлт утасны дугаар"
                  className="text-xs text-amber-950 font-medium placeholder:font-normal w-[300px] h-[45px] placeholder-amber-950 outline-0 bg-white placeholder:text-sm p-1.5"
                  onChange={HandleAdditionalPhoneValue}
                  value={additionalPhoneValue}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-[40px] w-full">
          <div className=" flex justify-between">
            <span className="text-[15px] text-amber-950 font-md">
              Бүтээгдэхүүн
            </span>
            <span>{totalPrice}₮</span>
          </div>
          <div className=" flex justify-between">
            <span className="text-[15px] text-amber-950 font-md">Хүргэлт</span>
            <span>3000 ₮</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[15px] text-amber-950 font-md">
              Савлагаа, тор
            </span>
            <span>500 ₮</span>
          </div>
          <div className=" border-[1px] border-amber-950"></div>
          <div className=" flex justify-between">
            <span className="text-[17px] text-amber-950 font-extrabold">
              Нийт дүн
            </span>
            <span className="font-extrabold text-amber-950">
              {totalPrice + 3500} ₮
            </span>
          </div>
        </div>
        <div className=" flex justify-between mt-[50px]">
          <button className="flex w-[270px] bg-amber-950 rounded-sm h-[35px] text-white justify-center items-center">
            <ChevronLeft />
            <span>Өмнөх алхам руу буцах</span>
          </button>
          <button
            className="flex w-[270px] bg-red-600 rounded-sm h-[35px] text-white justify-center items-center"
            onClick={ClickedDone}
          >
            <span>Захиалга баталгаажуулах</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
