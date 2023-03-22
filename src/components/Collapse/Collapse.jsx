import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function Collapse(props) {
  console.log(props);

  const [openElement, setopenElement] = useState(false);
  const toggle = () => {
    setopenElement(!openElement);
  };
  const [turnTheArrow, setTurnTheArrow] = useState(false);
  const onClickArrow = () => {
    setTurnTheArrow(!turnTheArrow);
  };

  console.log(turnTheArrow);

  return (
    <div>
      <div className={openElement ? "element open" : "element"}>
        <h5 className="titleDropdown" onClick={toggle}>
          <div
            className={turnTheArrow ? "childTitle open" : "childTitle"}
            onClick={onClickArrow}
          >
            {props.title}

            <FaAngleDown className="iconTitle" />
          </div>
        </h5>

        <div className="textDropDown">{props.description}</div>
      </div>

    </div>
  );
}

export default Collapse;
