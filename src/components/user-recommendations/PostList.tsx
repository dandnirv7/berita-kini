import { usePagination } from "@/context/PaginationContext";
import { PostCard } from "./PostCard";
import type { PostListProps } from "@/types/types";

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  const { currentPage, itemsPerPage } = usePagination();

  const startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  if (endIndex > posts?.length) {
    endIndex = posts?.length;
  }

  const currentData = posts?.slice(startIndex, endIndex) ?? [];

  if (currentData?.length === 0) {
    return <p>Tidak ada postingan yang tersedia.</p>;
  }

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-16">
      {currentData?.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};
