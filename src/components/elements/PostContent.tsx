import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import type { PostContentProps } from "@/types/types";

export const PostContent: React.FC<PostContentProps> = ({ post }) => (
  <div className="flex flex-col gap-3">
    <Card className="w-full">
      <Image
        alt={post?.title}
        src={post?.thumbnail}
        className="flex-1 object-cover"
        loading="lazy"
        height={517}
      />
    </Card>
    <p className="font-semibold text-secondary-text">{post?.description}</p>
  </div>
);
