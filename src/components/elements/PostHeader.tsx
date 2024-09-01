import { Link } from "react-router-dom";
import { Dot } from "lucide-react";

import { checkKeywordInUrl, slugifyTitle, formatDate } from "@/lib/utils";
import type { PostHeaderProps } from "@/types/types";

export const PostHeader: React.FC<PostHeaderProps> = ({ post }) => (
  <div className="flex flex-col justify-between gap-6">
    <Link
      to={`/${checkKeywordInUrl(post?.link)}/detail/${slugifyTitle(
        post?.title
      )}`}
    >
      <h3 className="text-4xl font-semibold">{post?.title}</h3>
    </Link>
    <div className="flex flex-row items-center gap-y-3">
      <Link
        to={`/${checkKeywordInUrl(post?.link)}`}
        className="font-semibold capitalize text-primary"
      >
        {checkKeywordInUrl(post?.link) === "gaya-hidup"
          ? "gaya hidup"
          : checkKeywordInUrl(post?.link)}{" "}
      </Link>
      <Dot className="text-[#d9d9d9]" size={24} />
      <p>{formatDate({ dateString: post?.pubDate, month: "short" })}</p>
    </div>
  </div>
);
