import React from "react";
import { useState } from "react";
import styles from "../Slideshow/Slideshow.scss";

import Logement from "../../pages/Logement/Logement";

function SlideShow(props) {
  const [indexVisibleImg, setIndexVisibleImg] = useState(0);
  // event au click incrément de 1 le indexVisible
  // console.log(props);
  let count = 0;
  console.log(indexVisibleImg);

  // change the object in array
  let arrayProps = props.pictures;
  // make the total of the value of arrayProps
  let arrayPropsTotal = arrayProps.length;
  console.log(arrayPropsTotal);

  function next() {
    setIndexVisibleImg(indexVisibleImg + 1);
  }
  function previous() {
    setIndexVisibleImg(indexVisibleImg - 1);
    console.log(indexVisibleImg - 1);
  }
  return (
    <div>
      <div className="caroussel">
        <img src={props.pictures[indexVisibleImg]} alt="" />

        <div className="carousselNavBtn">
          <button onClick={previous}>PRECEDENT</button>
          <button onClick={next}>SUIVANT</button>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
