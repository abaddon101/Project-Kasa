import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function Collapse(props) {
  console.log(props);
  const [openElement, setopenElement] = useState(false);
  const toggle = () => {
    setopenElement(!openElement);
  };

  return (
    <li className={openElement ? "element open" : "element"} key={props}>
      <h6 className="titleDropdown" onClick={toggle}>
        {props.title}

        <FaAngleDown className="iconTitle" />
      </h6>
      <p className="textDropDown">{props.description}</p>
    </li>
  );
}

export default Collapse;
