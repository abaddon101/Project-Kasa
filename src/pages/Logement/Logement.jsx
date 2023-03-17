import logements from "../../data/logements.json";
import Tags from "../../components/Tags/Tags";
import { useParams } from "react-router-dom";
import SlideShow from "../../components/Slideshow/Slideshow";
import styles from "../Logement/Logement.scss";
import Collapse from "../../components/Collapse/Collapse";

//  import { redirect } from "react-router-dom";
function Logement(props) {
  /* Get the id */
  const idJsonFIle = useParams();

  console.log(idJsonFIle);
  // make a find on the logement (jsonFile) // the (logement) param give the list of all the logements
  // the logement.id allow to send on the first id array of ths json file, but its necessary to allow to all
  // the file with : idJsonFIle.id
  const ficheLogement = logements.find(
    (logement) => logement.id === idJsonFIle.id
  );

  // if (ficheLogement === undefined) {
  //   return <Redirect to="/error" />;
  // }
  // console.log(ficheLogement);

  return (
    <div>
      <section>
        <SlideShow pictures={ficheLogement.pictures} />
      </section>
      <section className="logementCard">
        <div className="presentationBlocLogement">
          <h4 className="logementCardTitle">{ficheLogement.title}</h4>
          <div className="logementCardLocation">{ficheLogement.location}</div>
          <Tags tags={ficheLogement.tags} />
        </div>

        <div className="presentionHost">
          {ficheLogement.host.name}
          <img
            className="presentionHostpicture"
            src={ficheLogement.host.picture}
            alt={ficheLogement.host.picture}
          />
          <div className="rating">{ficheLogement.rating}</div>
        </div>
      </section>

      <section className="collapseBLocLogementPage">
        <Collapse
          key={ficheLogement.description.title}
          title="Description"
          summary="Description"
          description={ficheLogement.description}
        >
          <article className="collapseBLocLogementPageElement1">
            {ficheLogement.description}
          </article>
        </Collapse>
        <Collapse
          key={ficheLogement.equipments.title}
          title="Equipements"
          description={ficheLogement.equipments}
        >
          <article className="collapseBLocLogementPageElement2">
            {ficheLogement.equipments}
          </article>
        </Collapse>
      </section>
    </div>
  );
}
export default Logement;
