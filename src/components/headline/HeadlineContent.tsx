import { Link } from "react-router-dom";
import { BsCalendarEvent } from "react-icons/bs";
import { MoveUpRight } from "lucide-react";

import { formatDate, slugifyTitle } from "@/lib/utils";
import type { HeadlineContentProps } from "@/types/types";

export const HeadlineContent: React.FC<{
  news: HeadlineContentProps["news"];
}> = ({ news }) => {
  return (
    <aside className="w-1/3 space-y-4">
      <h2 className="font-semibold capitalize text-secondary-text">Headline</h2>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-4xl font-bold font-nunito-sans text-[#333]">
          {news.title}
        </h1>
        <p className="text-[#4F4F4F]">{news.description}</p>
        <div className="flex flex-row items-center gap-x-2">
          <BsCalendarEvent className="text-secondary-text" />
          <span className="text-xs font-semibold text-secondary-text">
            {formatDate({ dateString: news.pubDate })}
          </span>
        </div>
        <Link
          to={`/terbaru/detail/${slugifyTitle(news?.title)}`}
          className="flex flex-row items-center gap-1 font-semibold text-primary"
        >
          <span>Baca Selengkapnya</span>
          <MoveUpRight size={20} className="font-thin text-primary" />
        </Link>
      </div>
    </aside>
  );
};
