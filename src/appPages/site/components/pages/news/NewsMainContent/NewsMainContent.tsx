"use client";
import React, { useState } from "react";
import { useGetNewsQuery } from "@/redux/api/news";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import styles from "./NewsMainContent.module.scss";

interface INews {
  id: number;
  image: string;
  description_ky: string | null; // Nullable кылынды
  description_ru: string | null; // Nullable кылынды
  updated_at: string;
}

const NewsMainContent: React.FC = () => {
  const { data } = useGetNewsQuery();
  const { isKyrgyz, t } = useLanguageStore();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;

  // Sort news by date, newest first (иммутабилдүү жол менен массивди өзгөртүү)
  const sortedNews = data
    ? [...data].sort(
        (a: INews, b: INews) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      )
    : [];

  // Get current news items
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className={styles.NewsMainContent}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.news_head}>
            <h1>{t("Жаңылыктар", "Новости")}</h1>
            <hr />
          </div>
          <div className={styles.news_cards}>
            {currentNews.map((item: INews) => (
              <div
                key={item.id}
                className={styles.news_card}
                onClick={() => router.push(`/news/${item.id}`)}
              >
                <Image
                  alt="news_img"
                  src={item.image}
                  width={700}
                  height={500}
                  priority
                  quality={70}
                />
                <h2>
                  {isKyrgyz && item.description_ky
                    ? item.description_ky
                    : item.description_ru ?? "Маалымат жеткиликтүү эмес"}
                </h2>
                <div className={styles.news_end}>
                  <p>{item.updated_at.slice(0, 10)}</p>
                  <MessageSquare />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {t("Мурунку", "Предыдущая")}
            </button>
            <span>{currentPage}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastNews >= sortedNews.length}
            >
              {t("Кийинки", "Следующая")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsMainContent;
