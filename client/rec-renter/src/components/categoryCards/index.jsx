import React from "react";
import "./style.css";

function CategoryCard(props) {
  return (
    <div>
      <div className="card categoryCard">
        <img
          onClick={() => props.setCategory(props.id)}
          key={props.id}
          id={props.id}
          alt={props.name}
          src={props.image}
        />
        <div>
          <h2 className="categoryNames">{props.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
