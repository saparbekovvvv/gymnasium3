"use client";
import Link from "next/link";
import GalleryMainContent from "./gallery/GalleryMainContent/GalleryMainContent";
import scss from "./GalleryPage.module.scss";
const GalleryPage = () => {
  return (
    <>
      <div className={scss.content}>
        <div className="container">
          <div className={scss.graduatesTable}>
            <Link className={scss.Block} href={"/gallery/galery_photo"}>
              Photo Galery
            </Link>
            <Link className={scss.Block} href={"/gallery/galery_video"}>
              Video Galery
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
