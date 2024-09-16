import React from "react";
import scss from "./GraduatesMainContent.module.scss";
import Image from "next/image";
import graduates from "../../../../../../assets/images/graduates.png";

const GraduatesMainContent = () => {
    return (
        <section className={scss.GraduatesMainContent}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.titleText}>Выпускники</h1>
                    <div className={scss.mainContent}>
                        <h1 className={scss.mainContent_title}>
                            Гордость гимназии
                        </h1>
                        <div className={scss.graduates}>
                            <div className={scss.mainContent_graduates}>
                                <Image
                                    className={scss.graduates_Img}
                                    src={graduates}
                                    alt="graduates"
                                />
                                <div className={scss.graduateinfo}>
                                    <div className={scss.nameInfo}>
                                        <h1 className={scss.graduateName}>
                                            Серитбеков Байэл Серитбекович
                                        </h1>
                                        <h1 className={scss.graduateDate}>
                                            Выпускник 2018 года
                                        </h1>
                                    </div>
                                    <hr className={scss.hr} />
                                    <div className={scss.biography}>
                                        <h1 className={scss.graduateBio}>
                                            Серитбеков Байэл, блестящий
                                            выпускник школы, добился невероятных
                                            успехов в бизнесе. Получив диплом с
                                            отличием, он основал собственную
                                            компанию, которая стала лидером в
                                            своей отрасли, вдохновляя других
                                            своим примером.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraduatesMainContent;
