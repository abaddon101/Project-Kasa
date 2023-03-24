import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function Collapse(props) {
  // console.log(props);

  const [activeElement, setActiveElement] = useState(false);

  const toggle = () => {
    setActiveElement(!activeElement);
  };

  return (
    <div>
      <div className={activeElement ? "element open" : "element"}>
        <h5 className="titleDropdown" onClick={toggle}>
          <div className={activeElement ? "childTitle open" : "childTitle"}>
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
