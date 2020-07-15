import React from "react";

const Main = () => {
  React.useEffect(() => {
    console.log("here");
  }, []);

  return (
    <main className="portfolio">
      <h1>main content baby</h1>
    </main>
  );
};

export default Main;
