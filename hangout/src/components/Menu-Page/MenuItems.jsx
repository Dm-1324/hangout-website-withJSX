import React from "react";
import Waffles from "../menu-items/Waffles";
import Mocktails from "../menu-items/Mocktails";
import Beverages from "../menu-items/Beverages";
import Drinks from "../menu-items/Drinks";
import Desserts from "../menu-items/Desserts";
import Shakes from "../menu-items/Shakes";

const MenuItems = () => {
  return (
    <section id="menuitems">
      <div className="container max-w-6xl px-6 pt-4 pb-8 mb-4">
        <ul className="flex flex-col justify-center">
          <li className="border-b-2 border-subHeadBorder py-4">
            <Waffles />
          </li>
          <li className="border-b-2 border-subHeadBorder py-4">
            <Mocktails />
          </li>
          <li className="border-b-2 border-subHeadBorder py-4">
            <Beverages />
          </li>
          <li className="border-b-2 border-subHeadBorder py-4">
            <Drinks />
          </li>
          <li className="border-b-2 border-subHeadBorder py-4">
            <Desserts />
          </li>
          <li className="border-b-2 border-subHeadBorder py-4">
            <Shakes />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MenuItems;
