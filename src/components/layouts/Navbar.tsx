import React from "react";
import logo from "@/assets/logo.svg";
import type { menuItems } from "@/types/types";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const menuItems: menuItems[] = [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Terbaru",
      path: "/terbaru",
    },
    {
      title: "Hiburan",
      path: "/hiburan",
    },
    {
      title: "Gaya Hidup",
      path: "/gaya-hidup",
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
    <nav className="px-16 py-8 shadow-sm flex flex-row items-center justify-between border-b border-[#F2F2F2]">
      <div className="flex flex-row items-center gap-4">
        <img src={logo} alt="logo" className="" />
        <h1 className="text-2xl font-semibold text-left font-poppins">
          Berita Kini
        </h1>
      </div>
      <ul className="flex flex-row gap-x-7">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`font-semibold ${
              location.pathname === item.path
                ? "text-primary-500"
                : "text-secondary-text"
            }`}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
