import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Cake } from "lucide-react";
import { VenusAndMars } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[rgb(245,235,220)] h-screen justify-center flex items-center">
      <div className="flex flex-col gap-3">
        <div className="text-[rgb(214,35,0)] text-[23px] font-extrabold uppercase">
          Миний бүртгэл
        </div>
        <div className="w-[928px] flex flex-col gap-5 text-[15px] text-[rgb(80,35,20)]">
          <div className="flex flex-col gap-[6px]">
            <div className="text-[rgb(80,35,20)] font-bold">Овог</div>
            <div className="border-solid border-[rgb(150,126,118)] border-[1px] bg-[rgb(255,255,255)] h-[45px] rounded-[9px] flex items-center gap-2">
              <User className="ml-2" />
              <div> | </div>
              <input
                className="focus:outline-none focus:border-none"
                placeholder="Овог"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="text-[rgb(80,35,20)] font-bold">Нэр</div>
            <div className="border-solid border-[rgb(150,126,118)]  border-[1px] bg-[rgb(255,255,255)] h-[45px] rounded-[9px] flex items-center gap-2">
              <User className="ml-2" />
              <div> | </div>
              <input
                placeholder="Нэр"
                className="focus:outline-none focus:border-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="text-[rgb(80,35,20)] font-bold">И-мэйл хаяг</div>
            <div className="border-solid border-[rgb(150,126,118)] border-[1px] bg-[rgb(255,255,255)] h-[45px] rounded-[9px] flex items-center gap-2">
              <Mail className="ml-2" />
              <div> | </div>
              <input
                placeholder="И-мэйл хаяг"
                className="focus:outline-none focus:border-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className=" font-bold">Утасны дугаар</div>
            <div className="border-solid border-[rgb(150,126,118)] border-[1px] bg-[rgb(255,255,255)] h-[45px] rounded-[9px] flex items-center gap-2">
              <Phone className="ml-2" />
              <div> | </div>
              <input
                placeholder=""
                className="focus:outline-none focus:border-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="text-[rgb(80,35,20)] font-bold">Төрсөн өдөр</div>
            <div className="border-solid border-[rgb(150,126,118)]  border-[1px] bg-[rgb(255,255,255)] h-[45px] rounded-[9px] flex items-center gap-2">
              <Cake className="ml-2" />
              <div> | </div>
              <input
                placeholder="Төрсөн өдөр"
                type="date"
                className="w-full focus:outline-none focus:border-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="text-[rgb(80,35,20)] font-bold">Хүйс</div>
            <div className="border-solid border-[rgb(150,126,118)]  border-[1px] bg-[rgb(255,255,255)] h-[45px] rounded-[9px] flex items-center gap-2">
              <VenusAndMars className="ml-2" />
              <div> | </div>
              <select className="w-full focus:outline-none focus:border-none text">
                <option></option>
                <option>Эрэгтэй</option>
                <option>Эмэгтэй</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-[rgb(214,35,0)] w-[100px] h-[35px] rounded-[8px] text-white ">
            Хадгалах
          </button>
        </div>
      </div>
    </div>
  );
}
