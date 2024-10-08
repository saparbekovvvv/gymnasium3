"use client";

import React, { useState, useEffect } from "react";
import scss from "./GraduatesFirstTab.module.scss";
import profile from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetGraduatesQuery } from "@/redux/api/graduates";
import { useLanguageStore } from "@/stores/useLanguageStore";

type Graduate = {
    surname: string;
    name: string;
    last_name: string;
    year: null;
    ort: number;
};

type ExtendedGraduate = Omit<Graduate, "year"> & { year: number | null };

const GraduatesFirstTab: React.FC = () => {
    const { data, isLoading, isError } = useGetGraduatesQuery();
    const [filteredData, setFilteredData] = useState<ExtendedGraduate[]>([]);
    const { isKyrgyz, t } = useLanguageStore();

    const [showYears, setShowYears] = useState(false);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setFilteredData(data as ExtendedGraduate[]);
        }
    }, [data]);

    if (isLoading) {
        return (
            <div className={scss.loading}>
                {t("Жүктөлүүдө...", "Загрузка...")}
            </div>
        );
    }

    if (isError || !data || !Array.isArray(data)) {
        return (
            <div className={scss.error}>
                {t(
                    "Маалыматты жүктөөдө ката кетти",
                    "Ошибка при загрузке данных"
                )}
            </div>
        );
    }

    const filterData = (year: number | null) => {
        if (year !== null) {
            const result = (data as ExtendedGraduate[]).filter(
                (graduate) => graduate.year === year
            );
            setFilteredData(result);
        } else {
            setFilteredData(data as ExtendedGraduate[]);
        }
        setSelectedYear(year);
        setShowYears(false);
    };

    const resetFilter = () => {
        setFilteredData(data as ExtendedGraduate[]);
        setSelectedYear(null);
        setShowYears(false);
    };

    const uniqueYears = Array.from(
        new Set(
            (data as ExtendedGraduate[])
                .map((graduate) => graduate.year)
                .filter((year): year is number => year !== null)
        )
    ).sort((a, b) => b - a);

    return (
        <section className={scss.GraduatesFirstTab}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>
                        {t("Бүтүрүүчүлөр тизмеси", "Список выпускников")}
                    </h2>
                    <div className={scss.show}>
                        <h1 className={scss.showTitle}>
                            {t("Фильтрлөө", "Фильтрация")}
                        </h1>
                        <div className={scss.selector}>
                            <button
                                className={scss.button}
                                onClick={() => setShowYears(!showYears)}
                            >
                                {selectedYear !== null
                                    ? selectedYear.toString()
                                    : t("Баары", "Все")}
                            </button>
                            {showYears && (
                                <div className={scss.years}>
                                    <button
                                        className={scss.button}
                                        onClick={resetFilter}
                                    >
                                        {t("Баары", "Все")}
                                    </button>
                                    {uniqueYears.map((year) => (
                                        <button
                                            key={year}
                                            className={scss.button}
                                            onClick={() => filterData(year)}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>
                                {t("Окуучунун аты", "Имя ученика")}
                            </h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {filteredData.map((item, index) => (
                                <div key={index} className={scss.studentInfo}>
                                    <h1 className={scss.tableTextNumber}>
                                        {index + 1}
                                    </h1>
                                    <h1 className={scss.tableName}>
                                        <Image
                                            className={scss.studentIcon}
                                            src={profile}
                                            alt="Фото профиля"
                                            width={50}
                                            height={50}
                                        />
                                        {item.surname} {item.name}{" "}
                                        {item.last_name}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraduatesFirstTab;
