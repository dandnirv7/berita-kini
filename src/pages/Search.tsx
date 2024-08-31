import React from "react";
import { useSearchParams } from "react-router-dom";
import { useNationalNews } from "@/features/antara/fetchNationalNews";
import { filterPosts } from "@/lib/utils";
import { BasePage } from "@/components/fragments/BasePage";
import type { Post } from "@/types/types";
import { useLatestNews } from "@/features/cnn/fetchLatestNews";

export const Search: React.FC = () => {
  const { data: nationalNews, isLoading: isNationalNewsLoading } =
    useNationalNews();
  const { data: latestNews, isLoading: isLatestNewsLoading } = useLatestNews();
  const [searchParams] = useSearchParams();

  const isLoading = isNationalNewsLoading || isLatestNewsLoading;

  const searchTerm = searchParams.get("q") || "";
  const filteredPosts: Post[] = filterPosts(
    nationalNews?.posts || [],
    searchTerm
  );

  return (
    <BasePage
      isLoading={isLoading}
      nationalNews={nationalNews}
      latestNews={latestNews}
      filteredPosts={filteredPosts}
    />
  );
};
