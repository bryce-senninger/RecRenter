import React from "react";
import "./style.css";

function CategoryCard(props) {
  return (
    <div>
      <div
        className="card"
        onClick={() => {
          {
            setCategory(props.id);
          }
        }}
      >
        <img
          // key={props.id}
          id={props.id}
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default CategoryCard;
