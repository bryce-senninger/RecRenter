import React from "react";
import "../news/style-news.css";

function News() {
  return (
    <div
      className="wrapper-news"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <p className="p-news">Local Outdoor News</p>
      <ul className="list-unstyled">
        {/* <h1>Recreation News</h1> */}
        {/* <li className="media"> */}
        {/* <img src="..." className="mr-3" alt="..." /> */}
        <div className="media-body">
          <h5 className="mt-0 mb-1">List-based media object</h5>
          One additional card will be appended for each scraped news storey.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Et maiores quis
          magnam minus voluptates voluptas aliquam aperiam quisquam! Iste
          quibusdam veniam quam rerum quo corrupti deleniti animi consequatur
          voluptatem eos? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Architecto, earum in! Accusantium, modi deleniti maxime
          temporibus corrupti debitis, tempora qui, aliquam pariatur dicta sit
          eligendi eveniet harum quis tenetur aut. Lorem Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Enim iste quisquam perspiciatis
          laboriosam eos dolores quidem tenetur, consequatur esse quae iusto ad,
          nisi odit doloribus ea accusamus pariatur cum ut?
          <br />
        </div>
        {/* </li> */}
      </ul>
    </div>
  );
}

export default News;
