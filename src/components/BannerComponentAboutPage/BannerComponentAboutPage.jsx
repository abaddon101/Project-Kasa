import exterior from "../../assets/exterior.png";
import styles from "../BannerComponentAboutPage/BannerComponentAboutPage.scss";

function BannerComponentAboutPage() {
  return (
    <div>
      <section className="banner">
        <div className="shadowImageBanner"></div>
        <img className="bannerImg" src={exterior} alt="Exterior" />
      </section>
    </div>
  );
}

export default BannerComponentAboutPage;
