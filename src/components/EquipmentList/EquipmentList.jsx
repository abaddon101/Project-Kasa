import logements from "../../data/logements.json";

function EquipmentList(ficheLogement) {
  console.log(ficheLogement);
  /* Équipements */

  ficheLogement.map((equipments) => {
    console.log(equipments);
    return <li key={ficheLogement}>{equipments}</li>;
  });
}

export default EquipmentList;
