"use client";

import React from "react";
import scss from "./StudentsClassTable.module.scss";
import avatar from "../../../../../../assets/tableAvatar.png";
import Image from "next/image";
import { useGetStudentsQuery } from "@/redux/api/students";

interface GraduatesTab {
    name: string;
    surname: string;
    last_name: string;
    year: number;
    olympian_status?: { choosing: string };
    school_class: { grade: string; parallel: string };
    classroom_teacher: [
        {
            last_name: string;
            name: string;
            surname: string;
        }
    ];
}

const StudentClassTable = () => {
    const { data, isLoading, isError } = useGetStudentsQuery<GraduatesTab[]>();

    if (isLoading) return <div>Загрузка...</div>;
    if (isError || !data) return <div>Ошибка при загрузке данных.</div>;

    console.log(data);

    return (
        <section className={scss.StudentClass}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>Класс</h2>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя ученика</h1>
                            <h1 className={scss.titleText}>Класс</h1>
                            <h1 className={scss.titleText}>Кл. руководитель</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {data.map((item: GraduatesTab, index: number) => (
                                <div
                                    key={`${item.surname}-${item.name}-${item.last_name}-${index}`}
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
                                        {item.surname} {item.name}{" "}
                                        {item.last_name}
                                    </h1>
                                    <h1 className={scss.tableText}>
                                        {item.school_class.grade}-
                                        {item.school_class.parallel}
                                    </h1>
                                    <h1 className={scss.tableText}>
                                        {item.classroom_teacher
                                            .map((teacher) => teacher.name)
                                            .join(", ")}
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

export default StudentClassTable;
