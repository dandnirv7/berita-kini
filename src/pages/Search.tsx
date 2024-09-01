import React from "react";
import { useSearchParams } from "react-router-dom";

import { filterPosts } from "@/lib/utils";
import { useNationalNews } from "@/features/antara/fetchNationalNews";
import { MainPage } from "@/components/fragments/MainPage";
import { useLatestNews } from "@/features/cnn/fetchLatestNews";
import type { Post } from "@/types/types";

const SearchPage: React.FC = () => {
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
    <MainPage
      isLoading={isLoading}
      nationalNews={nationalNews}
      latestNews={latestNews}
      filteredPosts={filteredPosts}
    />
  );
};

export default SearchPage;
