import React from "react";
import { useState } from "react";
import styles from "../Slideshow/Slideshow.scss";

import Logement from "../../pages/Logement/Logement";

function SlideShow(props) {
  const [indexVisibleImg, setIndexVisibleImg] = useState(0);
  // event au click incrément de 1 le indexVisible
  //  console.log(props);
  console.log(indexVisibleImg);

  // change the object in array
  let arrayProps = props.pictures;
  // console.log(arrayProps);
  // make the total of the value of arrayProps
  let arrayPropsTotal = arrayProps.length;
  // console.log(arrayPropsTotal);

  function next() {
    setIndexVisibleImg(indexVisibleImg + 1);
    if (indexVisibleImg >= arrayPropsTotal - 1) {
      console.log("vous etes à la fin");
      setIndexVisibleImg(0);
      return;
    }
  }

  function previous() {
    setIndexVisibleImg(indexVisibleImg - 1);
    if (indexVisibleImg <= 0) {
      console.log("vous etes au début");
      setIndexVisibleImg(arrayPropsTotal - 1);
      return;
    }
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
