import React from "react";
import "./App.css";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Hero from "./component/Hero";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer/>
    </>
  );
}

export default App;
