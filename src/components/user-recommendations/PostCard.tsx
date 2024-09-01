import React from "react";
import { Card, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Dot } from "lucide-react";
import { checkKeywordInUrl, formatDate, slugifyTitle } from "@/lib/utils";

import type { PostCardProps } from "@/types/types";

export const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="flex flex-col justify-between gap-3 p-4">
    <Card className="flex h-full">
      <Image
        alt={post?.title}
        src={post?.thumbnail}
        className="flex-1 object-cover"
        width={276}
        height={197}
      />
    </Card>
    <div className="flex flex-col justify-between h-[70%]">
      <Link
        to={`/${checkKeywordInUrl(post?.link)}/detail/${slugifyTitle(
          post?.title
        )}`}
      >
        <h3 className="text-lg font-semibold line-clamp-3">{post?.title}</h3>
      </Link>
      <div className="flex flex-row items-center gap-y-3">
        <Link
          to={`/${
            checkKeywordInUrl(post?.link) === "gaya hidup"
              ? "gaya-hidup"
              : checkKeywordInUrl(post?.link)
          }`}
          className="font-semibold capitalize text-primary"
        >
          {checkKeywordInUrl(post?.link) === "gaya-hidup"
            ? "gaya hidup"
            : checkKeywordInUrl(post?.link)}
        </Link>
        <Dot className="text-[#d9d9d9]" size={24} />
        <p>
          {formatDate({
            dateString: post?.pubDate,
            month: "short",
          })}
        </p>
      </div>
    </div>
  </div>
);
