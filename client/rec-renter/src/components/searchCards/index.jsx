import React from "react";
import "./style.css";

function SearchCard(props) {
  return (
    <div className="card searchCard" key={props.id} id={props.id}>
      <h1 className="itemTitle">{props.title}</h1>
      <div className="listDescription">
        <div className="itemImageContainer"></div>
        <div className="itemText">
          <h2 className="price">${props.price}.00 per day</h2>
          <h2>Location: {props.location}</h2>
          <h2>{props.description}</h2>
          <h2>Contact Lister: {props.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
