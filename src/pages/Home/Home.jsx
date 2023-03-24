import React from "react";
import styles from "../Home/Home.scss"
import BannerComponent from "../../components/BannerComponent/BannerComponent.jsx";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent.jsx";

function Home() {
  return (
    <div>
      <BannerComponent />
      <GalleryComponent />
    </div>
  );
}
export default Home;
