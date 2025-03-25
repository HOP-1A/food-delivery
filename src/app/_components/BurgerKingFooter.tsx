import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[rgb(80,35,20)] text-white py-10">
      <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-between px-6 lg:px-16">
        {/* Left Section */}
        <div className="flex flex-col max-w-sm">
          <h1 className="uppercase text-[rgb(255,170,0)] font-extrabold text-4xl lg:text-5xl">
            Burger King
          </h1>
          <p className="mt-2 mb-4">
            Ил гал дээр шарсан хамгийн амттай бургерийг
            <br /> зөвхөн Бургер Кингээс
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, index) => (
              <div
                key={index}
                className="bg-[rgb(255,170,0)] rounded-full w-9 h-9 flex justify-center items-center"
              >
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          {[
            { Icon: Phone, text: "7777-3030" },
            { Icon: Mail, text: "marketing@burgerking.mn" },
            {
              Icon: MapPin,
              text: "Bayangol District, 4-r khoroolol, Ard Ayush Avenue, Ulaanbaatar, Mongolia, 16062",
            },
          ].map(({ Icon, text }, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-[rgb(255,170,0)] rounded-full w-9 h-9 flex justify-center items-center">
                <Icon className="w-5 h-5" />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
