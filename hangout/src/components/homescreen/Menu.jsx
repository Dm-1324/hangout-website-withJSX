import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      name: "Waffles",
      image: "image/menu-grid/menu-waffle.png",
      id: "waffles",
    },
    {
      name: "Mocktails",
      image: "image/menu-grid/menu-mocktails.png",
      id: "mocktails",
    },
    {
      name: "Beverages",
      image: "image/menu-grid/menu-beverages.png",
      id: "beverages",
    },
    { name: "Drinks", image: "image/menu-grid/menu-drinks.png", id: "drinks" },
    {
      name: "Desserts",
      image: "image/menu-grid/menu-desserts.png",
      id: "desserts",
    },
    { name: "Shakes", image: "image/menu-grid/menu-shakes.png", id: "shakes" },
  ];

  return (
    <section id="menu">
      <div className="container max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-headBlue font-bold text-2xl uppercase">Menu</p>
          <p className="text-descGray font-medium text-lg">
            <Link to="/menuscreen">See all</Link>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          {menuItems.map((item) => (
            <Link key={item.id} to={`/menuscreen?category=${item.id}`}>
              <div className="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full"
                />
                <p className="font-medium text-lg text-gridBlue mt-2 pb-2">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
