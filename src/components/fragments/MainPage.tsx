import React from "react";
import { Spinner } from "@nextui-org/react";
import { PopularNews } from "@/components/popular-section/PopularNews";
import { Headline } from "@/components/headline/Headline";
import UserRecommendations from "@/components/fragments/UserRecommendations";
import BannerAdsContent from "@/components/banner-ads/BannerAdsContent";
import type { MainPageProps, Post } from "@/types/types";

export const MainPage: React.FC<MainPageProps> = ({
  isLoading,
  nationalNews,
  latestNews,
  filteredPosts,
}) => {
  if (isLoading) {
    return (
      <Spinner
        className="flex items-center "
        label="Memuat ..."
        color="primary"
        labelColor="primary"
        size="lg"
      />
    );
  }

  if (!nationalNews) {
    return <div>Tidak ada postingan yang tersedia.</div>;
  }

  return (
    <section className="flex flex-col justify-center gap-y-32">
      <Headline />
      <PopularNews posts={latestNews?.posts as Post[]} />
      <UserRecommendations posts={filteredPosts || nationalNews.posts} />
      <BannerAdsContent />
    </section>
  );
};
