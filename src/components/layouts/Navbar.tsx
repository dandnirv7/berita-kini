import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar as NavbarNextUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import defaultLogo from "@/assets/navbar-default-logo.svg";
import whiteLogo from "@/assets/navbar-white-logo.svg";
import type { MenuItems } from "@/types/types";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems: MenuItems[] = [
    { title: "Beranda", path: "/" },
    { title: "Terbaru", path: "/terbaru" },
    { title: "Hiburan", path: "/hiburan" },
    { title: "Gaya Hidup", path: "/gaya-hidup" },
    { title: "Olahraga", path: "/olahraga" },
    { title: "Nasional", path: "/nasional" },
    { title: "Internasional", path: "/internasional" },
  ];

  const navbarBgClass = isScrolled ? "bg-primary" : "bg-white";
  const logoSrc = isScrolled ? whiteLogo : defaultLogo;
  const logoTextClass = isScrolled ? "text-white" : "text-black";

  const getLinkClass = (path: string) => {
    if (location.pathname === path) {
      return isScrolled ? "text-white" : "text-primary";
    }
    return isScrolled ? "text-[#F2F2F2]" : "text-secondary-text";
  };

  return (
    <NavbarNextUI
      isBordered
      maxWidth="2xl"
      className={`z-[99] px-12 py-4 ${navbarBgClass}`}
      isBlurred={false}
    >
      <NavbarBrand>
        <Link href="/">
          <div className="flex flex-row items-center gap-4">
            <img src={logoSrc} alt="logo" />
            <h1
              className={`text-2xl font-semibold text-left font-poppins ${logoTextClass}`}
            >
              Berita Kini
            </h1>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.path}
              className={`font-semibold ${getLinkClass(item.path)}`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </NavbarNextUI>
  );
}
