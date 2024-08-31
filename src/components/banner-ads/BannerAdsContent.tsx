import React from "react";
import { Card, Image } from "@nextui-org/react";

import malangTour from "@/assets/ads/malang-mbois-city-tour.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";

const BannerAdsContent: React.FC = () => {
  const [, setApi] = useState<CarouselApi | undefined>(undefined);

  return (
    <aside>
      <Card>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="flex flex-row justify-between gap-20 px-24 py-10 rounded-lg bg-secondary"
              >
                <div className="flex flex-col items-start gap-2 text-white ">
                  <h1 className="text-6xl font-semibold">
                    Petualangan Edukatif bersama Malang Mbois City Tour!
                  </h1>
                  <p>Petualangan Edukatif bersama Malang Mbois City Tour!</p>
                </div>
                <div className="flex items-center justify-center ">
                  <Image
                    className="w-screen"
                    height={300}
                    loading="lazy"
                    src={malangTour}
                    alt="ads banner"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Card>
    </aside>
  );
};

export default BannerAdsContent;
