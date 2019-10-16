import React from "react";
import "../news/style-news.css";

function News() {
  return (
    <div className="wrapper">
      <ul className="list-unstyled">
        <h1>Recreation News</h1>
        <li className="media">
          {/* <img src="..." className="mr-3" alt="..." /> */}
          <div className="media-body">
            <h5 className="mt-0 mb-1">List-based media object</h5>
            One additional card will be appended for each scraped news storey.
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default News;
