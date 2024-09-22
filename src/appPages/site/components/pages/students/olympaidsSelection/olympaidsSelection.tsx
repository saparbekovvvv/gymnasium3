"use client";

import scss from "./OlympaidsSelection.module.scss";
import React from "react";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useGetOlympiansQuery } from "@/redux/api/olympians";

const OlympaidsSelection = () => {
    const router = useRouter();
    const { isKyrgyz, t } = useLanguageStore();

    const { data, isError, isLoading } = useGetOlympiansQuery() || {};

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
        new Set(
            data.map((item) => item.name_of_olympia?.choosing).filter(Boolean)
        )
    )
        .map((name) => {
            const foundItem = data.find(
                (item) => item.name_of_olympia?.choosing === name
            );

            // Проверяем, что найденный элемент существует и имеет id
            if (foundItem && foundItem.id) {
                return { name: name as string, id: foundItem.id };
            }

            return null; // Если элемент не найден, возвращаем null
        })
        .filter(Boolean); // Фильтруем null-значения

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
                                    router.push(
                                        `/students/olympians/olymp_categories/${category?.id}`
                                    )
                                }
                                key={index}
                                className={scss.card}
                            >
                                {category?.name && (
                                    <h2>
                                        {isKyrgyz
                                            ? category.name
                                            : t(category.name, category.name)}
                                    </h2>
                                )}{" "}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OlympaidsSelection;
