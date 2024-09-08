import Link from "next/link";
import scss from "./StudentsMainContent.module.scss";
const StudentsMainContent = () => {
    return (
        <section className={scss.content}>
            <div className={scss.classes}>
                <Link href={"/students/studentsClass"} className={scss.block}>
                    <h1 className={scss.block_text}>4 класс</h1>
                </Link>{" "}
                <Link href={"#"} className={scss.block}>
                    <h1 className={scss.block_text}>5 класс</h1>
                </Link>{" "}
                <Link href={"#"} className={scss.block}>
                    <h1 className={scss.block_text}>6 класс</h1>
                </Link>{" "}
                <Link href={"#"} className={scss.block}>
                    <h1 className={scss.block_text}>7 класс</h1>
                </Link>{" "}
                <Link href={"#"} className={scss.block}>
                    <h1 className={scss.block_text}>8 класс</h1>
                </Link>{" "}
                <Link href={"#"} className={scss.block}>
                    <h1 className={scss.block_text}>9 класс</h1>
                </Link>{" "}
                <Link href={"#"} className={scss.block}>
                    <h1 className={scss.block_text}>10 класс</h1>
                </Link>{" "}
                <Link href={"#"} className={scss.block}>
                    <h1 className={scss.block_text}>11 класс</h1>
                </Link>{" "}
            </div>
        </section>
    );
};

export default StudentsMainContent;
