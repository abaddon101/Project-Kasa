import logements from "../../data/logements.json";
import styles from "../GalleryComponent/GalleryComponent.scss";
import { Link } from "react-router-dom";

// add event onclick send the show the id

function GalleryComponent() {
  return (
    <section className="gallery">
      <ul className="listGalleryBlock">
        {logements.map(({ cover, title, id }) => (
          <li className="listGalleryChild" key={id}>
            <Link
              to={`/Logement/${id}`}
              key={logements.id}
              className="linkArticle"
            >
              <article className="galleryArticle">
                <div className="shadowImage"></div>
                <img
                  className="imgGalleryArticle"
                  // data={id}
                  src={cover}
                  alt={title}
                />
                <h5 className="titleGalleryArticle">{title}</h5>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GalleryComponent;
