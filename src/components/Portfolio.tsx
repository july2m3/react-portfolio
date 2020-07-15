import React from "react";
import { v4 as uuid } from "uuid";

const Portfolio = (props: any) => {
  const { portfolioItems } = props;
  console.log(portfolioItems);

  const portfolio = portfolioItems.map((item: any) => (
    <li className="portfolio-item" key={uuid()}>
      <h1 className="title">{item.name}</h1>
      <p className="description">{item.description}</p>

      <div className="links">
        {item.homepage && (
          <p className="homepage">
            <a href={item.homepage}>View Site</a>
          </p>
        )}
        <p className="code">
          <a href={item.html_url}>See code</a>
        </p>
      </div>
    </li>
  ));

  return (
    <div className="portfolio" id="portfolio">
      <ul>{portfolio}</ul>
    </div>
  );
};

export default Portfolio;
