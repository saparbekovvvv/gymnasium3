"use client";

import React from "react";
import scss from "./OlympaidTable.module.scss";
import {
    useGetOlympiansQuery,
    useGetOlympiansSelectionQuery,
} from "@/redux/api/olympians";
import { useParams } from "next/navigation";

const OlympaidTable = () => {
    const { olymp_categories } = useParams();

    const { data, isLoading, isError } = useGetOlympiansSelectionQuery(
        String(olymp_categories)
    );

    console.log(data);

    if (isLoading) return <div className={scss.loading}>Загрузка...</div>;
    if (isError || !data) {
        return <div className={scss.error}>Ошибка при загрузке данных.</div>;
    }

    return (
        <div>
            <h2> {olymp_categories}</h2>
        </div>
    );
};

export default OlympaidTable;
