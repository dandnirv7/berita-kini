import React from "react";
import { PaginationProvider } from "@/context/PaginationContext";
import { PostList } from "@/components/user-recommendations/PostList";
import { PaginationControls } from "@/components/user-recommendations/PaginationControls";
import type { PostListProps } from "@/types/types";

export const UserRecommendationsContent: React.FC<PostListProps> = ({
  posts,
}) => {
  return (
    <PaginationProvider>
      <div className="flex flex-col gap-16">
        <PostList posts={posts} />
        <PaginationControls totalItems={posts?.length} />
      </div>
    </PaginationProvider>
  );
};
