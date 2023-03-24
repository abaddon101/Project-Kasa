import React from "react";
import { useState } from "react";
import styles from "../Slideshow/Slideshow.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SlideShow(props) {
  const [indexVisibleImg, setIndexVisibleImg] = useState(0);
  // change the object in array
  let arrayProps = props.pictures;
  // make the total of the value of arrayProps
  let arrayPropsTotal = arrayProps.length;

  function next() {
    setIndexVisibleImg(indexVisibleImg + 1);
    if (indexVisibleImg >= arrayPropsTotal - 1) {
      setIndexVisibleImg(0);
      return;
    }
  }
  function previous() {
    setIndexVisibleImg(indexVisibleImg - 1);
    if (indexVisibleImg <= 0) {
      setIndexVisibleImg(arrayPropsTotal - 1);
      return;
    }
  }
  return (
    <div>
      <div className="caroussel">
        <img src={props.pictures[indexVisibleImg]} alt="" />

        <div className="carousselNavBtn">
          <button className="carousselNavBtnPrevious" onClick={previous}>
            <MdKeyboardArrowLeft />
          </button>
          <button className="carousselNavBtnNext" onClick={next}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
