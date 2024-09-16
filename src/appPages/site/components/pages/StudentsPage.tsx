"use client";
import { useGetStudentsQuery } from "@/redux/api/students";
import scss from "./StudentsPage.module.scss";
import StudentsMainContent from "./students/StudentsMainContent/StudentsMainContent";
import StudentsOlympiad from "./students/StudentsOlympiad/StudentsOlympiad";
import StudentsParliament from "./students/StudentsParliament/StudentsParliament";

const StudentsPage = () => {
    const { data, error, isLoading } = useGetStudentsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    return (
        <section className={scss.StudentsPage}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.Title}>Все ученики</h1>
                    <div className={scss.heroContent}>
                        <StudentsMainContent />
                        <div className={scss.blocks}>
                            <StudentsOlympiad />
                            <StudentsParliament />
                        </div>
                    </div>{" "}
                </div>
            </div>
        </section>
    );
};

export default StudentsPage;
