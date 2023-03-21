import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function Collapse(props) {
  console.log(props);

  const [openElement, setopenElement] = useState(false);
  const toggle = () => {
    setopenElement(!openElement);
  };

  return (
    <div>
      <div className={openElement ? "element open" : "element"}>
        <h5 className="titleDropdown" onClick={toggle}>
          {props.title}

          <FaAngleDown className="iconTitle" />
        </h5>

        <div className="textDropDown">{props.description}</div>
        
      </div>

      {/* <li className="liDropDown">{props.equipments}</li> */}
    </div>
  );
}

export default Collapse;
