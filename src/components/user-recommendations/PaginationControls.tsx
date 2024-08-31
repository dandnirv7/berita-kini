import React from "react";
import { Pagination } from "@nextui-org/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { usePagination } from "@/context/PaginationContext";
import type { TotalItemsProps } from "@/types/types";

export const PaginationControls: React.FC<TotalItemsProps> = ({
  totalItems,
}) => {
  const { currentPage, setCurrentPage, itemsPerPage } = usePagination();

  const validItemsPerPage =
    !isNaN(itemsPerPage) && itemsPerPage > 0 ? itemsPerPage : 1;
  const validTotalItems =
    !isNaN(totalItems) && totalItems >= 0 ? totalItems : 0;

  const startItem = (currentPage - 1) * validItemsPerPage + 1;
  const endItem = Math.min(currentPage * validItemsPerPage, validTotalItems);

  if (validTotalItems <= 0) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between gap-4">
      <p className="text-small text-default-500">
        Menampilkan {startItem} hingga {endItem} dari {validTotalItems} hasil
      </p>
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className="flex flex-row items-center justify-center gap-2 text-dark-700"
        >
          <BsArrowLeft size={16} />
          Previous
        </button>
        <Pagination
          total={Math.ceil(validTotalItems / validItemsPerPage)}
          color="primary"
          classNames={{
            item: "bg-transparent shadow-none border-none text-dark-700",
          }}
          page={currentPage}
          siblings={2}
          onChange={setCurrentPage}
          radius="sm"
        />
        <button
          className="flex flex-row items-center justify-center gap-2 text-secondary-text"
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(validTotalItems / validItemsPerPage)
                ? prev + 1
                : prev
            )
          }
        >
          Next
          <BsArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
