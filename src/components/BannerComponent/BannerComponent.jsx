import exterior2 from "../../assets/exterior2.png";
import styles from "../BannerComponent/BannerComponentHomePage.scss";

function BannerComponent() {
  return (
    <div>
      <section className="banner">
        <div className="placeTitle">
          <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="shadowImageBanner"></div>
        <img className="bannerImg" src={exterior2} alt="Exterior" />
      </section>
    </div>
  );
}

export default BannerComponent;
