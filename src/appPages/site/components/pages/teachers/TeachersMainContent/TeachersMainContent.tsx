import Link from "next/link";
import scss from "./TeachersMainContent.module.scss";
const TeachersMainContent = () => {
  return (
    <section className={scss.content}>
      <div className="container">
        <Link href="/teacher">TeachersMainContent</Link>
      </div>
    </section>
  );
};

export default TeachersMainContent;
