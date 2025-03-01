import React from "react";

const Menu = () => {
  return (
    <section id="menu">
      <div class="container max-w-8xl px-6 py-8">
        <div class="flex items-center justify-between mb-4">
          <p class="text-headBlue font-bold text-2xl uppercase">Menu</p>
          <p class="text-descGray font-medium text-lg">
            <a href="#">See all</a>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 items-center justify-center">
          <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
            <img
              src="image/menu-grid/menu-waffle.png"
              alt=""
              class="object-cover w-full"
            />
            <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Waffles</p>
          </div>
          <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
            <img
              src="image/menu-grid/menu-mocktails.png"
              alt=""
              class="object-cover w-full"
            />
            <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Mocktails</p>
          </div>
          <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
            <img
              src="image/menu-grid/menu-beverages.png"
              alt=""
              class="object-cover w-full"
            />
            <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Beverages</p>
          </div>
          <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
            <img
              src="image/menu-grid/menu-drinks.png"
              alt=""
              class="object-cover w-full"
            />
            <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Drinks</p>
          </div>
          <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
            <img
              src="image/menu-grid/menu-desserts.png"
              alt=""
              class="object-cover w-full"
            />
            <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Desserts</p>
          </div>
          <div class="grid-image flex flex-col items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
            <img
              src="image/menu-grid/menu-shakes.png"
              alt=""
              class="object-cover w-full"
            />
            <p class="font-medium text-lg text-gridBlue mt-2 pb-2">Shakes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
