import React from "react";
import scss from "./GraduatesThirdTab.module.scss";
import avatar from "../../../../../../assets/tableAvatar.png";
import Image from "next/image";

const GraduatesThirdTab = () => {
    return (
        <section className={scss.GraduatesThirdTab}>
            <div className="container">
                <div className={scss.content}>
                    <h2 className={scss.title}>Список выпускников 2021-22</h2>
                    <div className={scss.table}>
                        <div className={scss.tableTitle}>
                            <h1 className={scss.titleText}>No.</h1>
                            <h1 className={scss.titleText}>Имя выпускника</h1>
                            <h1 className={scss.titleText}>ОРТ</h1>
                            <h1 className={scss.titleText}>Кл. руководитель</h1>
                        </div>
                        <div className={scss.tableContent}>
                            <div className={scss.hr}></div>
                            <div className={scss.studentInfo}>
                                <h1 className={scss.tableTextNumber}>1</h1>
                                <h1 className={scss.tableName}>
                                    <Image
                                        className={scss.studentIcon}
                                        src={avatar}
                                        alt=""
                                    />
                                    Абдрахманов Айдарбек Капарович
                                </h1>
                                <h1 className={scss.tableText}>4 а</h1>
                                <h1 className={scss.tableText}>М. Тарэловна</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraduatesThirdTab;
