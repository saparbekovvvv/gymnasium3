"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import scss from "./NewsDetailContent.module.scss";
import { useGetDetNewsQuery } from "@/redux/api/news";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useState } from "react";

const NewsDetailContent = () => {
  const { newsDetail } = useParams();
  const { data } = useGetDetNewsQuery(String(newsDetail));
  console.log(data, "data");
  const [like, setLike] = useState(false);

  return (
    <div className={scss.NewsDetailContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.newsText}>
            <h2>Новости</h2>
          </div>
          <h1>{data?.description}</h1>
          <h6>{data?.updated_at.slice(0, 10)}</h6>
          {data?.image && (
            <Image
              src={data.image}
              alt="img"
              width={1000}
              height={500}
              quality={70}
              priority
            />
          )}
          <div className={scss.poragraf}>
            <p>
              В народе его прозвали Дуйшеном наших дней («Первый учитель» Ч.
              Айтматова), Геродотом Лейлека, кыргызским Сухомлинским и т.д. Речь
              идет о педагоге-новаторе Гапыре Мадаминове – заслуженном учителе
              КР, директоре экспериментальной гимназии №3 с. Жаны-Жер
              Лейлекского района Баткенской области. На днях и.о. главы
              Минобразования Каныбек Иманалиев на своей странице в соцсети
              сообщил, что Гапыр Маматкулович назначен советником министра
              образования на общественных началах. Limon.KG собрал интересные
              факты из биографии уважаемого и почитаемого педагога страны.
            </p>
            <div className={scss.poragrafNext}>
              <p>{data?.content}</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;
