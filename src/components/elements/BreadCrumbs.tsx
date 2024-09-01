import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbItem,
} from "@nextui-org/react";
import { BsHouse } from "react-icons/bs";

const pathnameMap: { [key: string]: string } = {
  "gaya-hidup": "Gaya hidup",
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const maxSegment = "detail";

  const getDisplayName = (pathname: string) => {
    return (
      pathnameMap[pathname] ||
      pathname.charAt(0).toUpperCase() + pathname.slice(1)
    );
  };

  const endIndex = pathnames.indexOf(maxSegment);

  const breadcrumbItems = (
    endIndex === -1 ? pathnames : pathnames.slice(0, endIndex + 1)
  ).map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

    return (
      <BreadcrumbItem key={to}>
        <Link to={to}>{getDisplayName(value)}</Link>
      </BreadcrumbItem>
    );
  });

  return (
    <MuiBreadcrumbs size="lg" className="capitalize">
      <BreadcrumbItem startContent={<BsHouse size={18} />}>
        <Link to="/">Beranda</Link>
      </BreadcrumbItem>
      {breadcrumbItems}
    </MuiBreadcrumbs>
  );
};
