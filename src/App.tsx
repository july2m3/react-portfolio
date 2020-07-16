import React from "react";
import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [repos, updateRepos] = React.useState([{}]);
  React.useEffect(() => {
    const getData = async () => {
      const githubResponse = await fetch(
        "https://api.github.com/users/july2m3/repos",
      );
      const repos = await githubResponse.json();
      updateRepos(repos);
      console.log(repos);
    };

    getData();
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <Portfolio portfolioItems={repos} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
