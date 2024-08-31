import React from "react";
import SearchInput from "../elements/SearchInput";
import { UserRecommendationsContent } from "@/components/user-recommendations/UserRecommendationsContent";
import type { PostListProps } from "@/types/types";

const UserRecommendations: React.FC<PostListProps> = ({ posts }) => {
  return (
    <aside className="flex flex-col gap-y-8">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center w-full py-3 gap-x-4">
          <span className="after:content-[''] border-l-4 rounded-full h-8 w-1 border-primary-500"></span>
          <h1 className="text-2xl font-semibold capitalize">
            Rekomendasi Untuk Anda
          </h1>
        </div>
        <SearchInput />
      </div>
      <div className="pagination">
        <UserRecommendationsContent posts={posts} />
      </div>
    </aside>
  );
};

export default UserRecommendations;
