"use client";
import { useGetStudentsQuery } from "@/redux/api/students";
import scss from "./OlympaidsSelection.module.scss";
import React from "react";
import { useRouter } from "next/navigation";

const OlympaidsSelection = () => {
    const router = useRouter();
    const { data, isError, isLoading } = useGetStudentsQuery() || {};

    if (isLoading) return <div className={scss.loading}>Загрузка...</div>;
    if (isError || !data) {
        return <div className={scss.error}>Ошибка при загрузке данных.</div>;
    }

    console.log(data);

    const uniqueChoosing = Array.from(
        new Set(data.map((item) => item.olympian_status?.choosing))
    ).filter(Boolean);

    return (
        <div className={scss.OlympaidsSelection}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.title}>Виды олимпиад</h1>
                    <div className={scss.cards}>
                        {uniqueChoosing.map((choosing) => (
                            <div
                                onClick={() =>
                                    router.push(
                                        `/students/olympians/olymp_categories/${choosing}`
                                    )
                                }
                                key={choosing} // Используем уникальный идентификатор
                                className={scss.card}
                            >
                                <h2>{choosing}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OlympaidsSelection;
