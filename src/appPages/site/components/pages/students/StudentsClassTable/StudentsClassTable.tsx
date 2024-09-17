"use client";

import React, { useState, useEffect } from "react";
import scss from "./StudentsClassTable.module.scss";
import avatar from "../../../../../../assets/images/defaultProfile.png";
import Image from "next/image";
import { useGetStudentsClassQuery } from "@/redux/api/students";
import { useSearchParams } from "next/navigation";

const StudentClassTable = () => {
    const searchParams = useSearchParams();
    const classId = searchParams.get("grade"); // Получаем classId из параметров запроса

    // Using the defined types
    const {
        data: studentsData,
        isLoading,
        isError,
    } = useGetStudentsClassQuery(String(classId));
    const [filteredData, setFilteredData] = useState<STUDENTS.IStudent[]>([]);
    const [classExists, setClassExists] = useState<boolean>(true);

    useEffect(() => {
        if (studentsData) {
            const filtered = studentsData.filter(
                (student) => student.school_class.grade === String(classId)
            );
            setFilteredData(filtered);

            // Check if there are any students for the current classId
            setClassExists(filtered.length > 0);
        }
    }, [studentsData, classId]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError || !studentsData || !classId)
        return <div>Ошибка при загрузке данных.</div>;

    const filterDataByParallel = (parallel?: string) => {
        if (parallel) {
            const result = studentsData.filter(
                (item) =>
                    item.school_class.parallel.toLowerCase() ===
                        parallel.toLowerCase() &&
                    item.school_class.grade === String(classId)
            );
            setFilteredData(result);
            setClassExists(result.length > 0);
        } else {
            const filtered = studentsData.filter(
                (item) => item.school_class.grade === String(classId)
            );
            setFilteredData(filtered);
            setClassExists(filtered.length > 0);
        }
    };

    const uniqueParallels = Array.from(
        new Set(studentsData.map((item) => item.school_class.parallel))
    );

    return (
        <section className={scss.StudentClassTable}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.titleBlock}>
                        <h2 className={scss.title}>{classId} Класс</h2>
                        <div className={scss.filterButtons}>
                            <button
                                className={scss.button}
                                onClick={() => filterDataByParallel()}
                            >
                                Все
                            </button>
                            {uniqueParallels.map((parallel) => (
                                <div key={parallel}>
                                    <button
                                        className={scss.button}
                                        onClick={() =>
                                            filterDataByParallel(parallel)
                                        }
                                    >
                                        {parallel}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя ученика</h1>
                            <h1 className={scss.titleText}>Класс</h1>
                            <h1 className={scss.titleText}>Кл. руководитель</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            {classExists ? (
                                filteredData.map((item, index) => (
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
                                            {item.surname} {item.name}
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
