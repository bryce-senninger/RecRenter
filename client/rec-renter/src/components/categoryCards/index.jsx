import React from "react";
import "./style.css";

function CategoryCard(props) {
  return (
    <div>
      <div className="card categoryCard">
        <img
          className="categoryImg"
          onClick={() => props.setCategory}
          key={props.id}
          id={props.id}
          alt={props.name}
          src={props.image}
          category={props.category}
          value={props.category}
        />
        <div>
          <h2 className="categoryNames">{props.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
