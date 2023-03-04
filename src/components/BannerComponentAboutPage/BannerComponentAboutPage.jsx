import exterior from "/Users/33638/Desktop/roussel_mathieu_11_022023/src/assets/exterior.png";
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
