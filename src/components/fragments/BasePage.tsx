import { usePagination } from "@/context/PaginationContext";
import { Spinner } from "@nextui-org/react";
import { PostList } from "@/components/user-recommendations/PostList";
import { PaginationControls } from "@/components/user-recommendations/PaginationControls";
import type { PostListProps } from "@/types/types";
import { Breadcrumbs } from "@/components/elements/BreadCrumbs";

export const BasePage: React.FC<PostListProps> = ({ posts, isLoading }) => {
  const { currentPage, itemsPerPage } = usePagination();

  const startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  if (endIndex > posts?.length) {
    endIndex = posts?.length;
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
      <PostList posts={posts} />
      <PaginationControls totalItems={posts.length} />
    </div>
  );
};
