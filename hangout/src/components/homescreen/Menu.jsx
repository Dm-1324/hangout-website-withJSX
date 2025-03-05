import React from "react";
import { Link } from "react-router";

const Menu = () => {
  return (
    <section id="menu">
      <div class="container max-w-6xl px-6 py-8">
        <div class="flex items-center justify-between mb-4">
          <p class="text-headBlue font-bold text-2xl uppercase">Menu</p>
          <p class="text-descGray font-medium text-lg">
            <Link to="/menuscreen">See all</Link>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 items-center justify-center">
          <Link to="/menuscreen">
            <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/menu-grid/menu-waffle.png"
                alt=""
                class="object-cover w-full"
              />
              <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Waffles</p>
            </div>
          </Link>
          <Link to="/menuscreen">
            <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/menu-grid/menu-mocktails.png"
                alt=""
                class="object-cover w-full"
              />
              <p class="font-medium text-lg text-gridBlue mt-2 pb-2">
                Mocktails
              </p>
            </div>
          </Link>
          <Link to="/menuscreen">
            <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/menu-grid/menu-beverages.png"
                alt=""
                class="object-cover w-full"
              />
              <p class="font-medium text-lg text-gridBlue mt-2 pb-2">
                Beverages
              </p>
            </div>
          </Link>
          <Link to="/menuscreen">
            <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/menu-grid/menu-drinks.png"
                alt=""
                class="object-cover w-full"
              />
              <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Drinks</p>
            </div>
          </Link>
          <Link to="/menuscreen">
            <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/menu-grid/menu-desserts.png"
                alt=""
                class="object-cover w-full"
              />
              <p class="font-medium text-lg text-gridBlue mt-2 pb-2">
                Desserts
              </p>
            </div>
          </Link>
          <Link to="/menuscreen">
            <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/menu-grid/menu-shakes.png"
                alt=""
                class="object-cover w-full"
              />
              <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Shakes</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
