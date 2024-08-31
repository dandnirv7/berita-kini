import { Post } from "@/types/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type FormatDateProps = {
  dateString?: string;
  month?: "2-digit" | "long" | "short" | "narrow" | "numeric";
};

export const formatDate = ({
  dateString,
  month = "long",
}: FormatDateProps): string => {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "";
  }

  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: month,
    year: "numeric",
  });

  return formatter.format(date);
};

export const filterPosts = (posts: Post[], searchTerm: string): Post[] => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return posts?.filter((post) =>
    post?.title.toLowerCase().includes(lowerCaseSearchTerm)
  );
};

export const slugifyTitle = (title: string) => {
  return title
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
};

export const checkKeywordInUrl = (url: string) => {
  const keywords = [
    { key: "nasional", display: "nasional" },
    { key: "terbaru", display: "terbaru" },
    { key: "internasional", display: "internasional" },
    { key: "ekonomi", display: "ekonomi" },
    { key: "olahraga", display: "olahraga" },
    { key: "teknologi", display: "teknologi" },
    { key: "hiburan", display: "hiburan" },
    { key: "gaya-hidup", display: "gaya hidup" },
  ];

  const lowerCaseUrl = url.toLowerCase();

  for (let i = 0; i < keywords.length; i++) {
    const keyword = keywords[i];
    if (lowerCaseUrl.includes(keyword.key)) {
      return keyword.display;
    }
  }

  return null;
};
