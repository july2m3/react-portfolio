import React from "react";
import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App: React.FC = () => {
  React.useEffect(() => {
    const getData = async () => {
      const githubResponse = await fetch(
        "https://api.github.com/users/july2m3/repos",
      );
      const repos = await githubResponse.json();
      console.log(repos);
    };
    getData();
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
