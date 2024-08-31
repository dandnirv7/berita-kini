import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/image";
import { Dot } from "lucide-react";
import { checkKeywordInUrl, formatDate, slugifyTitle } from "@/lib/utils";

import type { PostListProps } from "@/types/types";

export const PopularNews: React.FC<PostListProps> = ({ posts }) => {
  return (
    <aside className="flex flex-col gap-y-8">
      <div className="flex flex-row items-center py-3 gap-x-4">
        <span className="after:content-[''] border-l-4 rounded-full h-8 w-1 border-primary"></span>
        <h1 className="text-xl font-semibold">Berita Terpopuler</h1>
      </div>
      <div className="flex flex-row items-center px-4 gap-y-12 gap-x-16">
        {posts?.slice(0, 3).map((news, index) => (
          <div key={index} className="relative">
            <div className="absolute flex items-center justify-center w-8 h-8 text-xl font-semibold text-white rounded-full font-nunito-sans -top-3 bg-dark-700 -left-3 z-[50]">
              {index + 1}
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <Image
                src={news.thumbnail}
                className="object-cover"
                alt={news.title}
              />
              <div className="flex flex-col justify-between gap-2">
                <Link
                  to={`/${checkKeywordInUrl(news?.link)}/detail/${slugifyTitle(
                    news?.title
                  )}`}
                >
                  <p className="font-semibold line-clamp-3">{news.title}</p>
                </Link>
                <div className="flex flex-row items-center gap-y-3">
                  <Link
                    to={`/${checkKeywordInUrl(news?.link)}`}
                    className="font-semibold capitalize text-primary"
                  >
                    {checkKeywordInUrl(news?.link)}
                  </Link>
                  <Dot className="text-[#d9d9d9]" size={24} />
                  <p>
                    {formatDate({
                      dateString: news.pubDate,
                      month: "short",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
