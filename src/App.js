import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ChooseUs from "./components/ChooseUs";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Home />
        <Table />
        <ChooseUs />
        <JoinUs />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
