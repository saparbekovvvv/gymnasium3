"use client";

import React from "react";
import scss from "./OlympaidTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";

import { useGetOlympiansQuery } from "@/redux/api/olympians";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

const OlympaidTable = () => {
    const { category_id } = useParams();
    const { t } = useLanguageStore();

    const { data, isLoading, isError } = useGetOlympiansQuery();

    if (isLoading) {
        return (
            <div className={scss.loading}>
                {t("Жүктөлүүдө...", "Загрузка...")}
            </div>
        );
    }
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

    // Find the first item that matches the category_id
    const categoryItem = data.find((item) => item.id === Number(category_id));

    if (!categoryItem) {
        return (
            <div className={scss.error}>
                {t("Категория табылган жок", "Категория не найдена")}
            </div>
        );
    }

    // Filter students based on matching id and name_of_olympia.choosing
    const filteredStudents = data.filter(
        (item) =>
            item.id === Number(category_id) &&
            item.name_of_olympia.choosing ===
                categoryItem.name_of_olympia.choosing
    );

    return (
        <section className={scss.OlympaidTable}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>
                        {t("Олимпиядачылар", "Олимпийцы")}
                    </h2>
                    <h2 className={scss.title}>
                        {categoryItem.name_of_olympia.choosing}
                    </h2>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>
                                {t("Окуучунун аты", "Имя ученика")}
                            </h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${scss.studentInfo} ${scss.animateFromLeft}`}
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        <h1 className={scss.tableTextNumber}>
                                            {index + 1}
                                        </h1>
                                        <h1 className={scss.tableName}>
                                            <Image
                                                className={scss.studentIcon}
                                                src={avatar}
                                                alt="img"
                                            />
                                            <div className={scss.nameContent}>
                                                <h1 className={scss.tableText}>
                                                    {item.student.surname}
                                                </h1>
                                                <h1 className={scss.tableText}>
                                                    {item.student.name}
                                                </h1>
                                            </div>
                                        </h1>
                                        <h1 className={scss.tableTextNumber}>
                                            {item.name_of_olympia.choosing}
                                        </h1>
                                    </div>
                                ))
                            ) : (
                                <div className={scss.noResults}>
                                    {t(
                                        "Категорияга дал келген окуучулар жок",
                                        "Нет учеников, соответствующих категории"
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OlympaidTable;
