"use client";
import Image from "next/image";
import scss from "./TeachersContent.module.scss";
import circle from "../../../../../../assets/images/Ellipse 19.png";
import teacher from "../../../../../../assets/images/image 9.png";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const TeachersContent = () => {
  const router = useRouter();
  const { isKyrgyz, t } = useLanguageStore();

  return (
    <section id={scss.content}>
      <div className="container">
        <h1>{t("Биздин мугалимдер", "Наши учителя")}</h1>
        <div className={scss.content}>
          <div className={scss.imageWrapper}>
            <Image
              src={circle}
              alt="background circle"
              className={scss.circle}
            />
            <Image src={teacher} alt="teacher" className={scss.teacher} />
          </div>
          <button
            className={scss.button}
            onClick={() => router.push("/teachers")}
          >
            {t("Бардык мугалимдер", "Все учителя")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeachersContent;
