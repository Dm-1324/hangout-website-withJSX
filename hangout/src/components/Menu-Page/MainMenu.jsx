import React, { useState } from "react";
import MenuHeader from "./MenuHeader";
import MenuItems from "./MenuItems";

const MainMenu = () => {
  const [selectedCategory, setselectedCategory] = useState("Waffles");

  return (
    <>
      <MenuHeader setselectedCategory={setselectedCategory} />
      <MenuItems selectedCategory={selectedCategory} />
    </>
  );
};

export default MainMenu;
