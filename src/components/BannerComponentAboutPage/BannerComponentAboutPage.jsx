import exterior from "../../assets/exterior.png";
import styles from "../BannerComponentAboutPage/BannerComponentAboutPage.scss";

function BannerComponentAboutPage() {
  return (
    <section className="bannerAbout">
      <div className="shadowImageBanner"></div>
      <img className="bannerImg" src={exterior} alt="Exterior" />
    </section>
  );
}

export default BannerComponentAboutPage;
