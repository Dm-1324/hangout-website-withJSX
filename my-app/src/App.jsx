import React from "react";
import Header from "./components/homescreen/Header";
import Menu from "./components/homescreen/Menu";
import Gallery from "./components/homescreen/gallery";
import AboutUs from "./components/homescreen/AboutUs";
import Directions from "./components/homescreen/Directions";
import Address from "./components/homescreen/Address";
import Footer from "./components/homescreen/Footer";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Gallery />
      <AboutUs />
      <Directions />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
