import exterior from "../../assets/exterior.png";
import styles from "../BannerComponentAboutPage/BannerComponentAboutPage.scss";

function BannerComponentAboutPage() {
  return (
    <div>
      <section className="banner">
        <img className="bannerImg" src={exterior} alt="Exterior" />
      </section>
    </div>
  );
}

export default BannerComponentAboutPage;
