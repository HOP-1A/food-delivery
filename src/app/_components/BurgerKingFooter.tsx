import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="h-[325px] w-screen bg-[rgb(80,35,20)] flex px-[350px] py-[60px] static bottom-0">
      <div className="flex gap-[250px]">
        <div className="flex flex-col ">
          <div className="uppercase text-[rgb(255,170,0)] font-[1000] text-[55px] ">
            Burger King
          </div>
          <div className="text-white  mb-5">
            Ил гал дээр шарсан хамгийн амттай бургерийг<br></br>зөвхөн Бургер
            Кингээс
          </div>
          <div className="flex gap-2 text-white">
            <div className="bg-[rgb(255,170,0)] rounded-full w-9 h-9 flex justify-center items-center">
              <Facebook className="w-5 h-5" />
            </div>{" "}
            <div className="bg-[rgb(255,170,0)] rounded-full w-9 h-9 flex justify-center items-center">
              <Instagram className="w-5 h-5" />
            </div>{" "}
            <div className="bg-[rgb(255,170,0)] rounded-full w-9 h-9 flex justify-center items-center">
              <Youtube className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col gap-5 mt-5">
          <div className="flex items-center gap-2">
            <div className="bg-[rgb(255,170,0)] rounded-full w-9 h-9 flex justify-center items-center ">
              <Phone className="w-5 h-5" />
            </div>
            <div>7777-3030</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[rgb(255,170,0)] rounded-full w-9 h-9 flex justify-center items-center ">
              <Mail className="w-5 h-5" />
            </div>
            <div>marketing@burgerking.mn</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[rgb(255,170,0)] rounded-full w-9 h-9 flex justify-center items-center ">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              Bayangol District, 4-r khoroolol, Ard Ayush Avenue, Ulaanbaatar,
              Mongolia, 16062
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
