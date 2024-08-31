export type LayoutProps = {
  children: React.ReactNode;
};

export type TotalItemsProps = {
  totalItems: number;
};

export type PaginationProviderProps = {
  children: React.ReactNode;
};

export interface PaginationContextType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
}

export type MenuItems = {
  title: string;
  path: string;
};

export interface HeadlineControlsProps {
  current: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
}

export interface HeadlineContentProps {
  news: {
    title: string;
    description: string;
    pubDate: string;
    link: string;
  };
}

export interface Post {
  title: string;
  thumbnail: string;
  pubDate: string;
  link: string;
  description?: string;
}

export type PostItems = Post;

export interface PostCardProps {
  post: PostItems;
}

export interface PostListProps {
  posts: Post[];
}

export interface NewsItem {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  thumbnail: string;
}

export interface LatestNewsResponse {
  posts: NewsItem[];
}

export interface BasePageProps {
  isLoading: boolean;
  nationalNews: { posts: Post[] } | null;
  latestNews?: { posts: Post[] } | null;
  filteredPosts?: Post[];
}
