import React from "react";
import { Spinner } from "@nextui-org/react";

import { usePagination } from "@/context/PaginationContext";
import { useLatestNews } from "@/features/cnn/fetchLatestNews";
import { Breadcrumbs } from "@/components/elements/BreadCrumbs";
import { PostList } from "@/components/user-recommendations/PostList";
import { PaginationControls } from "@/components/user-recommendations/PaginationControls";

const LatestPage: React.FC = () => {
  const { currentPage, itemsPerPage } = usePagination();
  const { data: latestNews, isLoading } = useLatestNews();

  const startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  if (endIndex > latestNews?.posts?.length) {
    endIndex = latestNews?.posts?.length;
  }

  if (isLoading) {
    return (
      <Spinner
        className="flex items-center "
        label="Memuat ..."
        color="primary"
        labelColor="primary"
        size="lg"
      />
    );
  }

  return (
    <div className="flex flex-col gap-16">
      <Breadcrumbs />
      <PostList posts={latestNews?.posts ?? []} />
      <PaginationControls totalItems={latestNews?.posts.length ?? []} />
    </div>
  );
};

export default LatestPage;
