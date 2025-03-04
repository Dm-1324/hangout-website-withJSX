import React from "react";
import Header from "./components/homescreen/Header";
import Menu from "./components/homescreen/Menu";
import Gallery from "./components/homescreen/gallery";
import AboutUs from "./components/homescreen/AboutUs";
import Directions from "./components/homescreen/Directions";
import Address from "./components/homescreen/Address";
import Footer from "./components/homescreen/Footer";
import MenuScreen from "./MenuScreen";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Menu />
            <Gallery />
            <AboutUs />
            <Directions />
            <Address />
            <Footer />
          </>
        }
      />

      {/* Menu Screen */}
      <Route path="/menuscreen" element={<MenuScreen />} />
    </Routes>
  );
}

export default App;
