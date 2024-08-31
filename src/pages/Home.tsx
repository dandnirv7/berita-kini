import React from "react";
import { useNationalNews } from "@/features/antara/fetchNationalNews";
import { useLatestNews } from "@/features/cnn/fetchLatestNews";
import { BasePage } from "@/components/fragments/BasePage";

export const HomePage: React.FC = () => {
  const { data: nationalNews, isLoading: isNationalNewsLoading } =
    useNationalNews();
  const { data: latestNews, isLoading: isLatestNewsLoading } = useLatestNews();

  const isLoading = isNationalNewsLoading || isLatestNewsLoading;

  return (
    <BasePage
      isLoading={isLoading}
      nationalNews={nationalNews}
      latestNews={latestNews}
    />
  );
};
