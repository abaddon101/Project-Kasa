import exterior2 from "../assets/exterior2.png";
import styles from "../pages/Home.scss";

function Banner() {
  return (
    <div>
      <section className="banner">
        <div className="placeTitle">
          <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
        </div>

        <img className="bannerImg" src={exterior2} alt="Exterior" />
      </section>
    </div>
  );
}

export default Banner;
