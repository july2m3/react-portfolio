import React from "react";
import { v4 as uuid } from "uuid";

const Portfolio = (props: any) => {
  const { portfolioItems } = props;
  console.log(portfolioItems);

  const portfolio = portfolioItems.map((item: any) => (
    <li className="portfolio__item" key={uuid()}>
      <h1 className="title">{item.name}</h1>

      <div className="links">
        <p className="code">
          <a href={item.html_url}>
            <i className="fab fa-github" />
          </a>
        </p>

        {item.homepage && (
          <p className="homepage">
            <a href={item.homepage}>
              <i className="fab fa-firefox-browser" />
            </a>
          </p>
        )}
      </div>

      <p className="description">{item.description}</p>
      {/* <p className="last-updated">{item.updated_at}</p> */}
    </li>
  ));

  return (
    <div className="portfolio" id="portfolio">
      <h1>Latest Projects</h1>
      <h3>Sorted by newest to oldest.</h3>
      <ul className="portfolio__items">{portfolio}</ul>
    </div>
  );
};

export default Portfolio;
