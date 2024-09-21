"use client";
import { useGetStudentsQuery } from "@/redux/api/students";
import scss from "./OlympaidsSelection.module.scss";
import React from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const OlympaidsSelection = () => {
    const router = useRouter();
    const { isKyrgyz, t } = useLanguageStore();

    const { data, isError, isLoading } = useGetStudentsQuery() || {};

    if (isLoading)
        return (
            <div className={scss.loading}>
                {t("Жүктөлүүдө...", "Загрузка...")}
            </div>
        );
    if (isError || !data) {
        return (
            <div className={scss.error}>
                {t(
                    "Маалыматты жүктөөдө ката кетти",
                    "Ошибка при загрузке данных"
                )}
            </div>
        );
    }

    const uniqueCategories = Array.from(
        new Set(data.map((item) => item.olympian_status?.choosing))
    ).filter(Boolean);

    console.log(uniqueCategories);
    return (
        <div className={scss.OlympaidsSelection}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.title}>
                        {t("Олимпияданын түрлөрү", "Виды олимпияд")}
                    </h1>
                    <div className={scss.cards}>
                        {uniqueCategories.map((category, index) => (
                            <div
                                onClick={() =>
                                    router.push(`/olymp_categories/${category}`)
                                }
                                key={category}
                                className={scss.card}
                            >
                                <h2>{category}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OlympaidsSelection;
