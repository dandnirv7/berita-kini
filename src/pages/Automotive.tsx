import React from "react";
import { DetailPage } from "@/components/fragments/DetailPage";
import { BasePage } from "@/components/fragments/BasePage";
import { useAutomotiveNews } from "@/features/antara/fetchAutomotive";

export const AutomotivePage: React.FC = () => {
  const { data: automotiveNews, isLoading: isAutomotiveNewsLoading } =
    useAutomotiveNews();
  return (
    <BasePage
      posts={automotiveNews?.posts ?? []}
      isLoading={isAutomotiveNewsLoading}
    />
  );
};

export const AutomotiveDetailPage: React.FC = () => {
  const { data: automotiveNews, isLoading: isAutomotiveNewsLoading } =
    useAutomotiveNews();
  return (
    <DetailPage
      posts={automotiveNews?.posts ?? []}
      isDataLoading={isAutomotiveNewsLoading}
    />
  );
};
