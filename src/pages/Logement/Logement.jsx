import logements from "../../data/logements.json";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Logement(props) {
  /* Récupère la bonne fiche */
  const id = useParams();

  console.log(id);
  const ficheLogement = logements.find((logement) => logement.id === id.id);
  console.log(ficheLogement);

  return (
    <div>
      <header>
        <img
          className="bannerLogementPage"
          src={ficheLogement.cover}
          alt={ficheLogement.title}
        />
      </header>
      <div className="presentationBlocLogement">
        {ficheLogement.title}
        {ficheLogement.location}
      </div>
      <div className="presentionHost">
        {ficheLogement.host.name}
        <img
          className="presentionHostpicture"
          src={ficheLogement.host.picture}
          alt={ficheLogement.host.picture}
        />
      </div>
      <div className="tag">{ficheLogement.tags}</div>
      <div className="rating">{ficheLogement.rating}</div>
      <section className="collapseBLocLogementPage">
        <article className="collapseBLocLogementPageElement1">
          {ficheLogement.description}
        </article>
        <article className="collapseBLocLogementPageElement2">
          {ficheLogement.equipments}
        </article>
      </section>
    </div>
  );
}
export default Logement;
