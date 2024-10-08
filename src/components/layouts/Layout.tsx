import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import type { LayoutProps } from "@/types/types";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="p-[72px]">{children}</main>
      <Footer />
    </>
  );
};
