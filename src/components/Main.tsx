import React from "react";

const Main = () => {
  React.useEffect(() => {
    console.log("here");
  }, []);

  return <main className="portfolio" id="portfolio"></main>;
};

export default Main;
