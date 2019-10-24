import React from "react";
import "./style.css";

function CategoryCard(props) {
  return (
    <div
      className="card categoryCard"
      onChange={props.handleClickInput}
      onClick={props.handleClick}
      key={props.id}
      id={props.id}
    >
      <img
        className="categoryImg"
        alt={props.name}
        src={props.image}
        category={props.name}
        value={props.value}
      />
      <div>
        <h2 className="categoryNames">{props.name}</h2>
      </div>
    </div>
  );
}

export default CategoryCard;
