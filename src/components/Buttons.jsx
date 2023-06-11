import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div>
      <Link to={"/Modal_A"}>
        <button style={{ color: "#46139f" }}>All Contacts</button>
      </Link>
      <Link to={"/Modal_B"}>
        <button style={{ color: "#ff7f50" }}> US Contacts</button>
      </Link>
    </div>
  );
};

export default Buttons;
