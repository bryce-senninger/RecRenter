import React from "react";
import "./style.css";

function NoResultHeader() {
  return (
    <div className="jumbotron postJumbo">
      <h1 className="display-4">No matching results found</h1>
      <p className="lead postLead">
        We apologize, but there were no results found for your search. Please
        check back soon, or try another search.
      </p>
    </div>
  );
}

export default NoResultHeader;
