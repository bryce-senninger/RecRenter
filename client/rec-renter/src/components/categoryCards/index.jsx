import React from "react";
import "./style.css";

function CategoryCard(props) {
  return (
    <div className="card categoryCard">
      <img
        className="categoryImg"
        onClick={props.handleClick}
        key={props.id}
        id={props.id}
        alt={props.name}
        src={props.image}
        category={props.name}
        value={props.category}
      />
      <div>
        <h2 className="categoryNames">{props.name}</h2>
      </div>
    </div>
  );
}

export default CategoryCard;
