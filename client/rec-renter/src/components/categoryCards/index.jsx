import React from "react";
import "./style.css";

function CategoryCard(props) {
  return (
    <div>
      <div className="card">
        <img
          onClick={() => props.setCategory(props.id)}
          key={props.id}
          id={props.id}
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default CategoryCard;
