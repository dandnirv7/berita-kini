import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@nextui-org/card";

import { useLatestNews } from "@/features/cnn/fetchLatestNews";
import { HeadlineContent } from "@/components/headline/HeadlineContent";
import { HeadlineControls } from "@/components/headline/HeadlineControls";
import type { LatestNewsResponse } from "@/types/types";
import { Image } from "@nextui-org/image";
import { slugifyTitle } from "@/lib/utils";

export const Headline: React.FC = () => {
  const { data: latestNews } = useLatestNews() as { data: LatestNewsResponse };
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const handlePrev = () => api?.scrollTo(api.selectedScrollSnap() - 1);
  const handleNext = () => api?.scrollTo(api.selectedScrollSnap() + 1);

  return (
    <section className="relative flex flex-col items-center gap-y-12">
      <div className="flex gap-x-[154px] items-start justify-between flex-row">
        {latestNews?.posts.length > 0 && (
          <HeadlineContent news={latestNews.posts[current]} />
        )}
        <Card isFooterBlurred radius="lg" className="w-1/2">
          <Carousel
            setApi={setApi}
            className="w-full h-full overflow-hidden border-none"
          >
            <CarouselContent>
              {latestNews?.posts.slice(0, 5).map((news, index) => (
                <CarouselItem key={index} className="h-full rounded-2xl">
                  <Link to={`/terbaru/detail/${slugifyTitle(news?.title)}`}>
                    <Image
                      alt={news?.title}
                      className="object-cover w-screen"
                      height={400}
                      src={news?.thumbnail}
                      loading="lazy"
                    />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Card>
      </div>
      <HeadlineControls
        current={current}
        count={count}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
