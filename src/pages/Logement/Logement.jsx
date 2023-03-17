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
          <h2 className="logementCardTitle">{ficheLogement.title}</h2>
          <h4 className="logementCardLocation">{ficheLogement.location}</h4>
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
        <ul className="collapseBLocLogementPageElement">
          <Collapse
            key={ficheLogement.description}
            title="Description"
            description={ficheLogement.description}
          >
            <li className="collapseBLocLogementPageElementList">
              {ficheLogement.description}
            </li>
          </Collapse>
        </ul>

        <ul className="collapseBLocLogementPageElement">
          <Collapse
            key={ficheLogement.equipments}
            title="Equipements"
            description={ficheLogement.equipments}
          >
            <li className="collapseBLocLogementPageElementList">
              {ficheLogement.equipments}
            </li>
          </Collapse>
        </ul>
      </section>
    </div>
  );
}
export default Logement;
