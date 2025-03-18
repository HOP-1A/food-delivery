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
type PriceDataType = {
  totalPrice: string;
  deliveryprice: string;
  packetPrice: string;
  productPrice: string;
};
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
  const [orderData, setOrderData] = useState<PriceDataType>();
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
  console.log(addressArray);
  console.log(officeORApartmentValue);
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
  const getPriceData = async () => {
    const mockData = {
      totalPrice: "9000",
      deliveryprice: "2000",
      packetPrice: "3000",
      productPrice: "4000",
    };
    // const JSONData = await fetch(`www.MockWeb.com`);
    // const data = await JSONData.json();
    setOrderData(mockData);
  };
  const postOrderData = async () => {
    const mockData = {
      totalPrice: "9000",
      deliveryprice: "2000",
      packetPrice: "3000",
      productPrice: "4000",
    };
    const NewBody = {
      orderAddress: addressArray,
    };
    const JSONData = await fetch(`www.MockWeb.com`, {
      method: "POST",

      body: JSON.stringify(NewBody),
      headers: { "Content-Type": "application/json" },
    });
  };
  useEffect(() => {
    getPriceData();
  }, []);
  return (
    <div>
      <div className="text-amber-950 font-extrabold text-[20px]">
        Хүргэлтийн мэдээлэл
      </div>
      <div>
        <div>
          <span className="text-[13px] text-amber-950 font-extrabold">
            Хүргэлтийн хаяг
          </span>
          <div className="flex items-center h-[30px] w-[700px]  bg-white border-[1px] border-gray-500 rounded-sm gap-1">
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
        <div className="w-1/2 h-[70px]">
          <span className="text-[13px] text-amber-950 font-extrabold">
            Хаягийн төрөл
          </span>

          <RadioGroup
            onValueChange={(value) => onOfficeORApartmentClick(value)}
          >
            <div className="flex w-[700px] gap-2 justify-between">
              <div className="flex items-center h-[30px] w-[345px]  bg-white border-[1px] border-gray-500 rounded-sm gap-1">
                <Hotel className="h-[20px]" />
                <div className="border-[1px] border-amber-950 h-[20px] rounded-sm"></div>
                <div className="w-[305px] flex justify-between">
                  <Label
                    htmlFor="option-one"
                    className="text-xs  text-amber-950 font-extrabold"
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
              <div className="flex items-center h-[30px] w-[345px] bg-white border-[1px] border-gray-500 rounded-sm gap-1">
                <Building2 className="h-[20px]" />
                <div className="border-[1px] border-amber-950 h-[20px] rounded-sm"></div>
                <div className="w-[305px] flex justify-between">
                  <Label
                    htmlFor="option-two"
                    className="text-xs  text-amber-950 font-extrabold"
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
        <div className="flex items-center gap-2 h-[70px]">
          {isOfficeValue ? (
            <div className="flex w-[345px] gap-1.5 h-[70px]">
              <div className="flex flex-col">
                <span className="text-[13px] text-amber-950 font-extrabold">
                  Давхар
                </span>
                <input
                  className="w-[170px] h-[30px] border-[1px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-extrabold"
                  placeholder="№..."
                  onChange={HandleFloorValue}
                  value={floorValue}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] text-amber-950 font-extrabold">
                  Тоот
                </span>
                <input
                  className="w-[170px] h-[30px] border-[1px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-extrabold"
                  placeholder="№..."
                  onChange={HandlehouseNumberValue}
                  value={houseNumberValue}
                />
              </div>
            </div>
          ) : (
            <div className="flex w-[345px] gap-1.5 h-[70px]">
              <div className="flex flex-col">
                <span className="text-[13px] text-amber-950 font-extrabold">
                  Орц
                </span>
                <input
                  className="w-[110px] h-[30px] border-[1px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-extrabold"
                  placeholder="№..."
                  onChange={HandleOrtsValue}
                  value={ortsValue}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] text-amber-950 font-extrabold">
                  Давхар
                </span>
                <input
                  className="w-[110px] h-[30px] border-[1px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-extrabold"
                  placeholder="№..."
                  onChange={HandleFloorValue}
                  value={floorValue}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] text-amber-950 font-extrabold">
                  Тоот
                </span>
                <input
                  className="w-[110px] h-[30px] border-[1px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5 text-xs outline-0 placeholder-amber-950  text-amber-950 font-medium placeholder:font-extrabold"
                  placeholder="№..."
                  onChange={HandlehouseNumberValue}
                  value={houseNumberValue}
                />
              </div>
            </div>
          )}
          <div className="flex w-[345px] gap-1.5 h-[70px]">
            <div className="flex flex-col">
              <span className="text-[13px] text-amber-950 font-extrabold">
                Хаягийн нэмэлт тайлбар
              </span>
              <input
                placeholder="Орцны код ... гэх мэт"
                className="text-xs text-amber-950 font-medium placeholder:font-extrabold w-[345px] h-[30px] placeholder-amber-950 border-[1px] border-gray-500 rounded-sm bg-white placeholder:text-sm p-1.5"
                value={additionalInfo}
                onChange={HandleAdditionalInfoValue}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <span className="text-[13px] text-amber-950 font-extrabold">
              Утасны дугаар
            </span>
            <div className=" w-[345px] h-[30px]  border-[1px] border-gray-500 rounded-sm bg-white flex items-center">
              <Phone className="h-[20px]" />
              <div className="border-[1px] border-amber-950 h-[20px]"></div>
              <input
                placeholder="Утасны дугаар"
                className="text-xs text-amber-950 font-medium placeholder:font-extrabold w-[300px] h-[25px] placeholder-amber-950 outline-0 bg-white placeholder:text-sm p-1.5"
                onChange={HandlePhoneValue}
                value={phoneValue}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-amber-950 font-extrabold">
              Нэмэлт утасны дугаар
            </span>
            <div className=" w-[345px] h-[30px]  border-[1px] border-gray-500 rounded-sm bg-white flex items-center">
              <Phone className="h-[20px]" />
              <div className="border-[1px] border-amber-950 h-[20px]"></div>
              <input
                placeholder="Нэмэлт утасны дугаар"
                className="text-xs text-amber-950 font-medium placeholder:font-extrabold w-[300px] h-[25px] placeholder-amber-950 outline-0 bg-white placeholder:text-sm p-1.5"
                onChange={HandleAdditionalPhoneValue}
                value={additionalPhoneValue}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <div className="w-4/6 flex justify-between">
          <span className="text-[15px] text-amber-950 font-md">
            Бүтээгдэхүүн
          </span>
          <span>{orderData?.productPrice}₮</span>
        </div>
        <div className="w-4/6 flex justify-between">
          <span className="text-[15px] text-amber-950 font-md">Хүргэлт</span>
          <span>{orderData?.deliveryprice}₮</span>
        </div>
        <div className="w-4/6 flex justify-between">
          <span className="text-[15px] text-amber-950 font-md">
            Савлагаа, тор
          </span>
          <span>{orderData?.packetPrice}₮</span>
        </div>
        <div className="w-4/6 border-[1px] border-amber-950"></div>
        <div className="w-4/6 flex justify-between">
          <span className="text-[17px] text-amber-950 font-extrabold">
            Нийт дүн
          </span>
          <span>{orderData?.totalPrice}₮</span>
        </div>
      </div>
      <div className="w-4/6 flex justify-between mt-[50px]">
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
  );
}
