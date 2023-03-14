import logements from "../../data/logements.json";
import { useParams } from "react-router-dom";
import SlideShow from "../../components/Slideshow/Slideshow";
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
  console.log(ficheLogement);

  return (
    <div>
      <header>
        <SlideShow pictures={ficheLogement.pictures} />
        {/* <img
          className="bannerLogementPage"
          src={ficheLogement.cover}
          alt={ficheLogement.title}
        /> */}
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
