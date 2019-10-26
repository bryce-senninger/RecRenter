import React from "react";
import "./style.css";

function SubcategoryCard(props) {
  return (
    <div
      className="card categoryCard"
      onClick={e => props.subCategoryHandleClick(props.id, e)}
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

export default SubcategoryCard;
