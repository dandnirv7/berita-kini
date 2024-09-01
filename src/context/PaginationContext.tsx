import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePrev = useCallback(() => {
    setCurrentPage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 1);
      setSearchParams({ page: newPage.toString() });
      return newPage;
    });
  }, [setSearchParams]);

  const handleNext = useCallback(() => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + 1;
      setSearchParams({ page: newPage.toString() });
      return newPage;
    });
  }, [setSearchParams]);

  const handleChangePage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      setSearchParams({ page: page.toString() });
    },
    [setSearchParams]
  );

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      const pageNumber = parseInt(page, 10);
      if (!isNaN(pageNumber)) {
        setCurrentPage(pageNumber);
      }
    }
  }, [searchParams]);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        itemsPerPage,
        handlePrev,
        handleNext,
        handleChangePage,
      }}
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
