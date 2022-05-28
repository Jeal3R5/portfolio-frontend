import "./App.css";
//IMPORT COMPONENTS
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

//IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  //URL SHOULD HAVE YOUR HEROKU URL FOR YOUR BACKEND, MAKE SURE YOU INCLUDE THE TRAILING SLASH
  //CREATE A VARIABLE CALLED URL W/ OUR HEROKU URL
  const URL = "https://portfolio-jeal3r5.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
