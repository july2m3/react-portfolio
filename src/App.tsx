import React from "react";
import "./App.scss";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App: React.FC = () => {
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
