import GraduatesFirstTab from "./graduates/GraduatesFirstTab/GraduatesFirstTab";
import GraduatesMainContent from "./graduates/GraduatesMainContent/GraduatesMainContent";
import GraduatesSecondTab from "./graduates/GraduatesSecondTab/GraduatesSecondTab";
import GraduatesThirdTab from "./graduates/GraduatesThirdTab/GraduatesThirdTab";
import scss from "./GraduatesPage.module.scss";
const GraduatesPage = () => {
  return (
    <>
      <div className={scss.content}>
        <GraduatesMainContent />
        <GraduatesFirstTab />
        <GraduatesSecondTab />
        <GraduatesThirdTab />
      </div>
    </>
  );
};

export default GraduatesPage;
