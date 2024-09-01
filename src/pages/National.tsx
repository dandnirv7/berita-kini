import React from "react";
import { useNationalNews } from "@/features/cnn/fetchNationalNews";
import { DetailPage } from "@/components/fragments/DetailPage";
import { BasePage } from "@/components/fragments/BasePage";

export const NationalPage: React.FC = () => {
  const { data: nationalNews, isLoading: isNationalNewsLoading } =
    useNationalNews();
  return (
    <BasePage
      posts={nationalNews?.posts ?? []}
      isLoading={isNationalNewsLoading}
    />
  );
};

export const NationalDetailPage: React.FC = () => {
  const { data: nationalNews, isLoading: isNationalNewsLoading } =
    useNationalNews();
  return (
    <DetailPage
      posts={nationalNews?.posts ?? []}
      isDataLoading={isNationalNewsLoading}
    />
  );
};
