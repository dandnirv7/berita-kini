import React from "react";
import { DetailPage } from "@/components/fragments/DetailPage";
import { BasePage } from "@/components/fragments/BasePage";
import { useLifeStylesNews } from "@/features/cnn/fetchLifeStyleNews";

export const LifeStylePage: React.FC = () => {
  const { data: lifeStyleNews, isLoading: isLifeStyleNewsLoading } =
    useLifeStylesNews();
  return (
    <BasePage
      posts={lifeStyleNews?.posts ?? []}
      isLoading={isLifeStyleNewsLoading}
    />
  );
};

export const LifeStyleDetailPage: React.FC = () => {
  const { data: lifeStyleNews, isLoading: isLifeStyleNewsLoading } =
    useLifeStylesNews();
  return (
    <DetailPage
      posts={lifeStyleNews?.posts ?? []}
      isDataLoading={isLifeStyleNewsLoading}
    />
  );
};
