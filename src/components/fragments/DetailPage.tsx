import { useLatestNews } from "@/features/cnn/fetchLatestNews";
import { findPostBySlug } from "@/lib/utils";
import { Spinner } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { PostHeader } from "@/components/elements/PostHeader";
import { PostContent } from "@/components/elements/PostContent";
import { CommentSection } from "@/components/elements/CommentSection";
import { PopularNewsList } from "@/components/elements/PopularNewsList";
import { Breadcrumbs } from "@/components/elements/BreadCrumbs";

import type { DetailPageProps } from "@/types/types";

export const DetailPage: React.FC<DetailPageProps> = ({
  posts,
  isDataLoading,
}) => {
  const { data: latestNews, isLoading: isLatestNewsLoading } = useLatestNews();
  const isLoading = isDataLoading && isLatestNewsLoading;

  const location = useLocation();
  const slug = location.pathname;
  const post = findPostBySlug(posts, slug);

  if (isLoading) {
    return (
      <Spinner
        className="flex items-center "
        label="Memuat ..."
        color="primary"
        labelColor="primary"
        size="lg"
      />
    );
  }

  return (
    <div className="flex flex-col gap-16">
      <Breadcrumbs />
      <main className="grid grid-cols-12 gap-4">
        <aside className="flex flex-col col-span-8 px-2 gap-9">
          <PostHeader post={post} slug={slug} />
          <PostContent post={post} />

          <div className="flex flex-col gap-5 text-lg mt-18 mb-36">
            <p>
              Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI
              Sumardji merespons peluang Timnas Indonesia pindah dari Stadion
              Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga
              Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan
              Stadion GBK yang jadi markas Indonesia dalam babak kedua
              Kualifikasi Piala Dunia 2026 kerap bermasalah. Pada pertandingan
              kandang pertama melawan Vietnam, Maret lalu, rumput GBK rusak
              parah. PPKGBK selalu pengelola pun mendapat kritik deras.
            </p>

            <p>
              Acara-acara di luar sepak bola itu kerap membuat kondisi rumput
              tidak sehat dan tidak terlihat bagus saat pertandingan, khususnya
              laga Timnas Indonesia. Sampai saat melawan Irak, rumput GBK tidak
              terlihat sempurna meskipun kondisinya lebih bagus dibanding lawan
              Vietnam. Opsi pindah kandang pun muncul.
            </p>
            <p>
              "Nanti kami akan sampaikan [rencana pindah dari GBK]," ujar
              Sumardji saat ditanya kemungkinan menggunakan stadion lain di
              putaran ketiga kualifikasi. Sumardji tidak membantah kondisi
              rumput GBK yang masih kurang bagus dalam duel Indonesia vs Irak.
              PSSI pun berharap PPKGBK bisa lebih memperhatikan kondisi rumput
              untuk pertandingan Skuad Garuda. "Kami sampai saat ini sudah
              telepon dengan pengelola GBK karena kondisi rumput kemarin kurang
              bagus, kami memohon ke pihak GBK supaya betul-betul disiapkan dan
              diperhatikan kondisi rumput," tutur Sumardji. "Kalau dilihat-lihat
              sepertinya kondisi rumput GBK kayaknya stres itu, sehingga dengan
              kondisi itu akan memengaruhi, tadi saya telepon supaya
              diperhatikan," kata Sumardji menambahkan.
            </p>
          </div>
          <CommentSection />
          <PopularNewsList news={latestNews} isAside />
        </aside>
        <aside className="flex flex-col col-span-4 gap-y-8">
          <PopularNewsList news={latestNews} />
        </aside>
      </main>
    </div>
  );
};
