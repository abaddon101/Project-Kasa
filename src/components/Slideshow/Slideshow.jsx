import React from "react";
import { useState } from "react";
import Logement from "../../pages/Logement/Logement";

function SlideShow(props) {
  const [indexVisibleImg, setIndexVisibleImg] = useState(0);
  // event au click incrément de 1 le indexVisible
  console.log(props);
  function next() {
    setIndexVisibleImg(indexVisibleImg + 1);
  }
  return (
    <div>
      <img src={props.pictures[indexVisibleImg]} alt="" />
      <button onClick={next}>SUIVANT</button>
    </div>
  );
}

export default SlideShow;
