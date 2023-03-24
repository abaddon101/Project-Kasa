import logements from "../../data/logements.json";
import Tags from "../../components/Tags/Tags";
import { useParams, Navigate } from "react-router-dom";
import SlideShow from "../../components/Slideshow/Slideshow";
import styles from "../Logement/Logement.scss";
import Collapse from "../../components/Collapse/Collapse";
import Rate from "../../components/Rate/Rate";

function Logement() {
  /* Get the id */
  const idJsonFIle = useParams();
  // make a find on the logement (jsonFile) // the (logement) param give the list of all the logements
  // the logement.id allow to send on the first id array of ths json file, but its necessary to allow to all
  // the file with : idJsonFIle.id
  const ficheLogement = logements.find(
    (logement) => logement.id === idJsonFIle.id
  );
  if (ficheLogement === undefined) {
    return <Navigate to="/error" />;
  }
  const equipmentLogement = ficheLogement.equipments.map((stuff, index) => {
    return <li key={index}>{stuff}</li>;
  });

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
        <div className="identityHost">
          <div className="presentionHost">
            <div className="HostName">{ficheLogement.host.name}</div>
            <img
              className="presentionHostpicture"
              src={ficheLogement.host.picture}
              alt={ficheLogement.host.picture}
            />
          </div>
          <Rate rate={ficheLogement.rating} />
        </div>
      </section>
      <section className="collapseBLocLogementPage">
        <div className="collapseBLocLogementPageElement">
          <Collapse
            key={ficheLogement.description}
            title="Description"
            description={
              <div className="decriptionLogement">
                {ficheLogement.description}
              </div>
            }
          ></Collapse>
        </div>
        <div className="collapseBLocLogementPageElement">
          <Collapse
            key={ficheLogement.equipments}
            title="Equipements"
            description={<ul className="equipmentList">{equipmentLogement}</ul>}
          ></Collapse>
        </div>
      </section>
    </div>
  );
}
export default Logement;
