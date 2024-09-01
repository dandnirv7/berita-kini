import React from "react";
import { DetailPage } from "@/components/fragments/DetailPage";
import { BasePage } from "@/components/fragments/BasePage";
import { useSportsNews } from "@/features/cnn/fetchSportsNews";

export const SportsPage: React.FC = () => {
  const { data: sportsNews, isLoading: isSportsNewsLoading } = useSportsNews();
  return (
    <BasePage posts={sportsNews?.posts ?? []} isLoading={isSportsNewsLoading} />
  );
};

export const SportsDetailPage: React.FC = () => {
  const { data: sportsNews, isLoading: isSportsNewsLoading } = useSportsNews();
  return (
    <DetailPage
      posts={sportsNews?.posts ?? []}
      isDataLoading={isSportsNewsLoading}
    />
  );
};
