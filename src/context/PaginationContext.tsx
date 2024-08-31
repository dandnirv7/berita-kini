import React, { createContext, useContext, useState } from "react";

import type {
  PaginationContextType,
  PaginationProviderProps,
} from "@/types/types";

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
);

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, itemsPerPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = (): PaginationContextType => {
  const context = useContext(PaginationContext);

  if (context === undefined) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }

  return context;
};
