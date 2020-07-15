import React from "react";
import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";
// import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [repos, updateRepos] = React.useState([{}]);
  React.useEffect(() => {
    const getData = async () => {
      const githubResponse = await fetch(
        "https://api.github.com/users/july2m3/repos",
      );
      const repos = await githubResponse.json();
      console.log(repos);
    };

    // getData();
    const exampleRepos = [
      {
        name: "yo",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sit fugiat porro similique laudantium illum nemo nisi, soluta vel ratione! Suscipit, non? Quo, obcaecati delectus unde illo provident atque earum!",
      },
      {
        name: "yo",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sit fugiat porro similique laudantium illum nemo nisi, soluta vel ratione! Suscipit, non? Quo, obcaecati delectus unde illo provident atque earum!",
      },
      {
        name: "yo",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sit fugiat porro similique laudantium illum nemo nisi, soluta vel ratione! Suscipit, non? Quo, obcaecati delectus unde illo provident atque earum!",
      },
      {
        name: "yo",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sit fugiat porro similique laudantium illum nemo nisi, soluta vel ratione! Suscipit, non? Quo, obcaecati delectus unde illo provident atque earum!",
      },
    ];
    updateRepos(exampleRepos);
  }, []);

  return (
    <>
      <Nav />
      <Header />
      {/* <Main/> */}
      <Portfolio portfolioItems={repos} />
      <Footer />
    </>
  );
};

export default App;
