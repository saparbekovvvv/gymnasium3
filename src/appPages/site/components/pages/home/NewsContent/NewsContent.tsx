"use client";
import { useGetNewsQuery } from "@/redux/api/news";
import scss from "./NewsContent.module.scss";
import Image from "next/image";
import { LuMessagesSquare } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const NewsContent = () => {
  const { data: news } = useGetNewsQuery();
  const { isKyrgyz, t } = useLanguageStore();

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/news");
  };
  return (
    <section id={scss.content}>
      <div className="container">
        <h1>{t("Жаңылыктар", "Новости")}</h1>
        <div className={scss.newsCard}>
          {news
            ?.map((item) => (
              <div className={scss.card} key={item.id}>
                <Image
                  src={item.image}
                  alt={item.image}
                  width={300}
                  height={200}
                  priority
                  quality={70}
                />
                <p>{isKyrgyz ? item.description_ky : item.description_ru}</p>
                <article className={scss.end}>
                  <span>{item?.created_at.slice(0, 10)}</span>
                  <LuMessagesSquare />
                </article>
              </div>
            ))
            .slice(0, 6)}
        </div>
        <div className={scss.buttonContainer}>
          <button onClick={handleNavigate}>
            {t("Бардык жаңылыктар", "Все новости")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsContent;
