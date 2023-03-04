import logements from "../../data/logements.json";
import styles from "../GalleryComponent/GalleryComponent.scss"
import { Link } from "react-router-dom";
function GalleryComponent() {
  return (
    <section className="gallery">
      <ul className="listGalleryBlock">
        {logements.map(({ cover, title, id }) => (
          <li className="listGalleryChild" key={id}>
            <Link className="linkArticle" to={`/Annonces/${id}`}>
              <article className="galleryArticle">
                <img className="imgGalleryArticle" src={cover} alt={title} />
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
