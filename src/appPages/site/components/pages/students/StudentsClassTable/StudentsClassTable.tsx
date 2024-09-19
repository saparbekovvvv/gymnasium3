"use client";

import React, { useState, useEffect } from "react";
import scss from "./StudentsClassTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetStudentsClassQuery } from "@/redux/api/students";
import { useSearchParams } from "next/navigation";

const StudentClassTable: React.FC = () => {
    const searchParams = useSearchParams();
    const classId = searchParams.get("grade");

    const {
        data: studentsData,
        isLoading,
        isError,
    } = useGetStudentsClassQuery(String(classId));
    const [filteredData, setFilteredData] = useState<STUDENTS.IStudent[]>([]);

    useEffect(() => {
        if (studentsData) {
            const filtered = studentsData.filter(
                (student) => student.school_class.grade === String(classId)
            );
            setFilteredData(filtered);
        }
    }, [studentsData, classId]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError || !studentsData || !classId)
        return <div>Ошибка при загрузке данных.</div>;

    return (
        <section className={scss.StudentClassTable}>
            <div className="container">
                <div className={`${scss.content} ${scss.animateFromLeft}`}>
                    <div className={scss.titleBlock}>
                        <h2 className={scss.title}>{classId} Класс</h2>
                    </div>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя ученика</h1>
                            <h1 className={scss.titleText}>Кл. руководитель</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <div
                                        key={`${item.surname}-${item.name}-${index}`}
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
                                                alt={`Аватар студента ${item.name} ${item.surname}`}
                                            />
                                            {item.surname} {item.name}
                                        </h1>

                                        <h1 className={scss.tableText}>
                                            {item.classroom_teacher
                                                .map((teacher) => teacher.name)
                                                .join(", ")}
                                        </h1>
                                    </div>
                                ))
                            ) : (
                                <h1 className={scss.noClass}>
                                    Класс {classId} не найден.
                                </h1>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentClassTable;
