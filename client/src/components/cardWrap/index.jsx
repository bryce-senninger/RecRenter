import React from "react";
import "./style.css";

function CardWrap(props) {
  return <div className="cardWrapper">{props.children}</div>;
}

export default CardWrap;
