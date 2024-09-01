import React from "react";
import { DetailPage } from "@/components/fragments/DetailPage";
import { BasePage } from "@/components/fragments/BasePage";
import { usePoliticsNews } from "@/features/antara/fetchPoliticsNews";

export const PoliticsPage: React.FC = () => {
  const { data: politicNews, isLoading: isPoliticNewsLoading } =
    usePoliticsNews();
  return (
    <BasePage
      posts={politicNews?.posts ?? []}
      isLoading={isPoliticNewsLoading}
    />
  );
};

export const PoliticsDetailPage: React.FC = () => {
  const { data: politicNews, isLoading: ispoliticNewsLoading } =
    usePoliticsNews();
  return (
    <DetailPage
      posts={politicNews?.posts ?? []}
      isDataLoading={ispoliticNewsLoading}
    />
  );
};
