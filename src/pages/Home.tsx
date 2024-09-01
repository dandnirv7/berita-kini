import React from "react";
import { useNationalNews } from "@/features/antara/fetchNationalNews";
import { useLatestNews } from "@/features/cnn/fetchLatestNews";
import { MainPage } from "@/components/fragments/MainPage";

const HomePage: React.FC = () => {
  const { data: nationalNews, isLoading: isNationalNewsLoading } =
    useNationalNews();
  const { data: latestNews, isLoading: isLatestNewsLoading } = useLatestNews();

  const isLoading = isNationalNewsLoading || isLatestNewsLoading;

  return (
    <MainPage
      isLoading={isLoading}
      nationalNews={nationalNews}
      latestNews={latestNews}
    />
  );
};

export default HomePage;
