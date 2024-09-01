import React from "react";
import footerLogo from "@/assets/footer-logo.svg";
import { Link } from "react-router-dom";
import {
  BsYoutube as Youtube,
  BsInstagram as Instagram,
  BsFacebook as Facebook,
  BsSendFill,
} from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { MenuItems } from "@/types/types";

const Footer: React.FC = () => {
  const itemsFooter: MenuItems[] = [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Teknologi",
      path: "/teknologi",
    },
    {
      title: "Otomotif",
      path: "/otomotif",
    },
    {
      title: "Berita",
      path: "/berita",
    },
    {
      title: "Olahraga",
      path: "/olahraga",
    },
    {
      title: "Nasional",
      path: "/nasional",
    },
    {
      title: "Internasional",
      path: "/internasional",
    },
  ];

  return (
    <footer className="bg-dark-600 px-[72px] static bottom-0 left-0 w-full py-16 flex  border-t border-[#F2F2F2] gap-x-[72px] justify-between text-white">
      <section className="flex flex-col gap-11">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-row items-center gap-4">
            <img src={footerLogo} alt="logo" />
            <h1 className="text-2xl font-semibold text-left text font-poppins">
              Berita Kini
            </h1>
          </div>
          <p className="font-nunito-sans font-normal text-[#F2F2F2] text-lg">
            &copy; 2023 Berita Kini. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6">
          <p className="text-xl font-nunito-sans">Ikuti Kami</p>
          <div className="flex flex-row gap-x-6">
            <div className="p-2 w-fit rounded-xl bg-[#E0E0E0]">
              <Youtube size={24} color="#333" />
            </div>
            <div className="p-2 w-fit rounded-xl bg-[#E0E0E0]">
              <Instagram size={24} color="#333" />
            </div>
            <div className="p-2 w-fit rounded-xl bg-[#E0E0E0]">
              <Facebook size={24} color="#333" />
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-5 ">
        <h1 className="text-2xl font-semibold font-nunito-sans">Telusuri</h1>
        <div>
          <ul className="flex flex-col gap-y-4">
            {itemsFooter.map((item, index) => (
              <li key={index} className="text-base font-medium">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-y-5">
        <h1 className="text-xl font-nunito-sans">Bantuan</h1>
        <div>
          <ul className="flex flex-col gap-y-4">
            <li className="text-base font-medium">
              <Link to={"/"}> Kontak Kami</Link>
            </li>
            <li className="text-base font-medium">
              <Link to={"/"}> Laporkan Pembajakan</Link>
            </li>
            <li className="text-base font-medium">
              <Link to={"/"}> Kebijakan</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col w-1/4 gap-y-5">
        <h1 className="text-xl font-semibold font-nunito-sans">
          Berlangganan Berita Terbaru
        </h1>
        <div className="relative flex items-center w-full max-w-sm space-x-2">
          <Input
            type="email"
            placeholder="Masukkan Email"
            className="text-black py-7"
          />
          <Button
            type="submit"
            className="absolute p-3 w-11 h-11 bg-primary right-2"
          >
            <BsSendFill size={24} />
          </Button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
