import React from "react";
import { DetailPage } from "@/components/fragments/DetailPage";
import { BasePage } from "@/components/fragments/BasePage";
import { useTechnologyNews } from "@/features/cnn/fetchTechnologyNews";

export const TechnologyPage: React.FC = () => {
  const { data: technologyNews, isLoading: isTechnologyNewsLoading } =
    useTechnologyNews();
  return (
    <BasePage
      posts={technologyNews?.posts ?? []}
      isLoading={isTechnologyNewsLoading}
    />
  );
};

export const TechnologyDetailPage: React.FC = () => {
  const { data: technologyNews, isLoading: isTechnologyNewsLoading } =
    useTechnologyNews();
  return (
    <DetailPage
      posts={technologyNews?.posts ?? []}
      isDataLoading={isTechnologyNewsLoading}
    />
  );
};
