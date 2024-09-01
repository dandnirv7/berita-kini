import { Link } from "react-router-dom";
import { Dot } from "lucide-react";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { checkKeywordInUrl, slugifyTitle, formatDate } from "@/lib/utils";
import type { PopularNewsListProps } from "@/types/types";
import { Button } from "@nextui-org/react";

export const PopularNewsList: React.FC<PopularNewsListProps> = ({
  news,
  isAside,
}) => {
  return (
    <div className={`flex flex-col gap-y-8 ${isAside ? "" : "px-4"}`}>
      <div className="flex flex-row items-center py-3 gap-x-4">
        <span className="after:content-[''] border-l-4 rounded-full h-8 w-1 border-primary"></span>
        {isAside ? (
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-xl font-semibold">Berita Terkait</h1>
            <Button
              variant="bordered"
              color="primary"
              className="font-semibold bg-blue-50"
              size="lg"
              radius="sm"
            >
              <Link to="/terbaru" tabIndex={-1}>
                Lihat Semua
              </Link>
            </Button>
          </div>
        ) : (
          <h1 className="text-xl font-semibold">Berita Terpopuler</h1>
        )}
      </div>
      <div
        className={`flex ${
          isAside
            ? "flex-row items-center gap-10"
            : "flex-col items-center gap-y-12 gap-x-16"
        }`}
      >
        {news?.posts.slice(0, 3).map((newsItem, index) => (
          <div
            key={index}
            className={`relative ${
              isAside ? "flex flex-col h-full gap-3" : "w-full"
            }`}
          >
            {isAside ? (
              <>
                <Image
                  src={newsItem.thumbnail}
                  className="object-cover w-screen"
                  alt={newsItem.title}
                  loading="lazy"
                  height={188}
                />
                <div className="flex flex-col justify-between h-full gap-2">
                  <Link
                    to={`/${checkKeywordInUrl(
                      newsItem.link
                    )}/detail/${slugifyTitle(newsItem.title)}`}
                  >
                    <h3 className="text-lg font-semibold line-clamp-3">
                      {newsItem.title}
                    </h3>
                  </Link>
                  <div className="flex flex-row items-center gap-y-3">
                    <Link
                      to={`/${checkKeywordInUrl(newsItem.link)}`}
                      className="font-semibold capitalize text-primary"
                    >
                      {checkKeywordInUrl(newsItem.link)}
                    </Link>
                    <Dot className="text-[#d9d9d9]" size={24} />
                    <p>
                      {formatDate({
                        dateString: newsItem.pubDate,
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="absolute flex items-center justify-center w-8 h-8 text-lg font-semibold text-white rounded-full -top-3 bg-dark-700 -left-3 z-[50]">
                  {index + 1}
                </div>
                <div className="grid grid-cols-12">
                  <Card className="col-span-5 w-fit">
                    <Image
                      src={newsItem.thumbnail}
                      className="object-cover"
                      alt={newsItem.title}
                      loading="lazy"
                      width={147}
                      height={128}
                    />
                  </Card>
                  <div className="flex flex-col justify-between col-span-7 gap-2 pb-2">
                    <Link
                      to={`/${checkKeywordInUrl(
                        newsItem.link
                      )}/detail/${slugifyTitle(newsItem.title)}`}
                    >
                      <p className="font-semibold line-clamp-3">
                        {newsItem.title}
                      </p>
                    </Link>
                    <div className="flex flex-row items-center gap-y-3">
                      <Link
                        to={`/${checkKeywordInUrl(newsItem.link)}`}
                        className="font-semibold capitalize text-primary"
                      >
                        {checkKeywordInUrl(newsItem.link)}
                      </Link>
                      <Dot className="text-[#d9d9d9]" size={24} />
                      <p>
                        {formatDate({
                          dateString: newsItem.pubDate,
                          month: "short",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
