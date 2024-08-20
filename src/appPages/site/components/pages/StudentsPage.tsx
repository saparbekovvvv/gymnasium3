"use client";
import { useGetStudentsQuery } from "@/redux/api/students";

import scss from "./StudentsPage.module.scss";
import StudentsMainContent from "./students/StudentsMainContent/StudentsMainContent";
import StudentsOlympiad from "./students/StudentsOlympiad/StudentsOlympiad";
import StudentsParliament from "./students/StudentsParliament/StudentsParliament";
import Link from "next/link";

const StudentsPage = () => {
  const { data, error, isLoading } = useGetStudentsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div className={scss.content}>
        <StudentsMainContent />
        <Link href="/students/olympiad">
          <StudentsOlympiad />
        </Link>
        <Link href="/students/parliament">
          <StudentsParliament />
        </Link>
      </div>
    </>
  );
};

export default StudentsPage;
