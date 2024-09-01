import React from "react";
import { DetailPage } from "@/components/fragments/DetailPage";
import { BasePage } from "@/components/fragments/BasePage";
import { useInternationalNews } from "@/features/cnn/fetchInternationalNews";

export const InternationalPage: React.FC = () => {
  const { data: internationalNews, isLoading: isInternationalNewsLoading } =
    useInternationalNews();
  return (
    <BasePage
      posts={internationalNews?.posts ?? []}
      isLoading={isInternationalNewsLoading}
    />
  );
};

export const InternationalDetailPage: React.FC = () => {
  const { data: internationalNews, isLoading: isInternationalNewsLoading } =
    useInternationalNews();
  return (
    <DetailPage
      posts={internationalNews?.posts ?? []}
      isDataLoading={isInternationalNewsLoading}
    />
  );
};
