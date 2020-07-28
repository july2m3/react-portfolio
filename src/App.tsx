import React from 'react';

import Nav from './components/Nav/';
import Header from './components/Header/';
import Portfolio from './components/Portfolio/';
import Contact from './components/Contact/';
import Footer from './components/Footer/';

import './App.scss';

const App: React.FC = () => {
  const [repos, updateRepos] = React.useState([{}]);
  React.useEffect(() => {
    const getData = async () => {
      const githubResponse = await fetch(
        'https://api.github.com/users/july2m3/repos',
      );
      const repos = await githubResponse.json();
      const sortedRepos = repos.sort((a: any, b: any) => {
        return a.updated_at > b.updated_at ? -1 : 1;
      });
      updateRepos(sortedRepos);
      console.log(repos);
      console.log(sortedRepos);
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
