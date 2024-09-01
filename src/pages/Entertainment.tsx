import React from "react";
import { DetailPage } from "@/components/fragments/DetailPage";
import { BasePage } from "@/components/fragments/BasePage";
import { useEntertainmentNews } from "@/features/cnn/fetchEntertainment";

export const EntertainmentPage: React.FC = () => {
  const { data: entertainment, isLoading: isEntertainmentLoading } =
    useEntertainmentNews();
  return (
    <BasePage
      posts={entertainment?.posts ?? []}
      isLoading={isEntertainmentLoading}
    />
  );
};

export const EntertainmentDetailPage: React.FC = () => {
  const { data: entertainment, isLoading: isEntertainmentLoading } =
    useEntertainmentNews();
  return (
    <DetailPage
      posts={entertainment?.posts ?? []}
      isDataLoading={isEntertainmentLoading}
    />
  );
};
