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
        <div className="media-body outdoorNews">
          <h1 className="mt-0 mb-1 localNews">Outdoors News</h1>
          <ul className="articles">
            <a
              className="newsLink"
              href="https://www.ksl.com/article/46662164/national-parks-service-drops-plan-to-allow-atvs-in-utah"
            >
              National Parks Service drops plan to allow ATVs in Utah
            </a>
            <hr></hr>
            <a
              className="newsLink"
              href="https://www.ksl.com/article/46661230/arkansas-hunter-gored-by-the-deer-he-thought-he-shot-and-killed"
            >
              Arkansas hunter gored by the deer he thought he shot and killed
            </a>
            <hr></hr>
            <a
              className="newsLink"
              href="https://www.ksl.com/article/46661887/scarred-by-grizzly-bear-biologist-turns-the-other-cheek"
            >
              Scarred by grizzly bear, biologist turns the other cheek
            </a>
            <hr></hr>
            <a
              className="newsLink"
              href="https://www.ksl.com/article/46661663/a-secret-trail-to-utahs-protected-paradise"
            >
              A secret trail to Utah’s protected paradise
            </a>
            <hr></hr>
            <a
              className="newsLink"
              href="https://www.ksl.com/article/46661593/biologists-hope-restocking-project-will-help-bring-portions-of-strawberry-river-back-to-life-after-2018-fire"
            >
              Biologists hope restocking project will help bring portions of
              Strawberry River back to life after 2018 fire
            </a>
            {/* <li>
              Official: Solving wild horse problem will take $5B, 15 years
            </li>
            <li>Photos: Walking in an autumn-winter wonderland</li> */}
            {/* <li>
              Duck hunters rescued on Utah Lake — but then their rescuer got
              stuck, too
            </li>
            <li>
              DWR to anglers: Release all bluegill caught at Steinaker
              Reservoir, Pelican Lake
            </li> */}
          </ul>
          <br />
        </div>
        {/* </li> */}
      </ul>
    </div>
  );
}

export default News;
