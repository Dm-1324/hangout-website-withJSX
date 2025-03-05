import React from "react";
import MenuHeader from "./components/Menu-Page/MenuHeader";
import MenuItems from "./components/Menu-Page/MenuItems";
import Footer from "./components/homescreen/Footer";

const MenuScreen = () => {
  return (
    <div>
      {/* Menu screen */}

      <MenuHeader />
      <MenuItems />
      <Footer />
    </div>
  );
};

export default MenuScreen;
