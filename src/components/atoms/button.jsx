import React from "react";
import "./atomstyle/button.css";
import { Button as Btn } from "react-bootstrap";

function Button({ btntitle, handleBtnClick }) {
  return (
    <Btn className="mybtn" onClick={handleBtnClick}>
      {btntitle}
    </Btn>
  );
}

export default Button;
