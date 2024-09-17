"use client";

import React from "react";
import scss from "./OlympaidTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetStudentsQuery } from "@/redux/api/students";
import { useGetOlympiansQuery } from "@/redux/api/olympians";

const OlympaidTable = () => {
    const { data, isLoading, isError } = useGetOlympiansQuery();

    if (isLoading) return <div className={scss.loading}>Загрузка...</div>;
    if (isError || !data)
        return <div className={scss.error}>Ошибка при загрузке данных.</div>;

    console.log(data);

    return (
        <section className={scss.OlympaidTable}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>Олимпийцы</h2>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя ученика</h1>
                            <h1 className={scss.titleText}>Олимпиада</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {data?.map((item, index: number) => (
                                <div
                                    key={`${item.student.name}-${item.student.surname}-${index}`}
                                    className={scss.studentInfo}
                                >
                                    <h1 className={scss.tableTextNumber}>
                                        {index + 1}
                                    </h1>
                                    <h1 className={scss.tableName}>
                                        <Image
                                            className={scss.studentIcon}
                                            src={avatar}
                                            alt="Аватар студента"
                                        />
                                        {item.student.surname}{" "}
                                        {item.student.name}{" "}
                                    </h1>
                                    <h1 className={scss.tableText}>
                                        {item.name_of_olympia.choosing}
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

export default OlympaidTable;
