import React from "react";

const MenuHeader = () => {
  return (
    <>
      <section id="menu-header">
        <div class="container max-w-6xl px-6 pt-8 mb-4">
          <div className="flex items-center justify-between gap-14">
            <div className="flex items-center justify-center gap-2.5">
              <ion-icon
                name="chevron-back-outline"
                class="w-6 h-6 text-descGray"
              ></ion-icon>

              <h3 class="text-lg font-semibold text-descGray">MENU</h3>
            </div>
            <div className="flex items-start justify-center gap-3.5">
              <div class="flex flex-col items-center gap-1">
                <button class="relative w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition duration-300">
                  <div class="w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 translate-x-0"></div>
                </button>
                <span class="text-descGray text-xs font-normal">veg only</span>
              </div>
              <ion-icon
                name="search-outline"
                class="w-6 h-6 text-descGray"
              ></ion-icon>
            </div>
          </div>
        </div>
      </section>

      <section id="menu-flex">
        <div class="container max-w-6xl px-6 py-4 shadow-md">
          <div class="flex items-center justify-between gap-6 mb-4 overflow-x-scroll scrollbar-hide">
            <div class="flex flex-col items-center gap-2.5 border rounded-md p-1">
              <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="image/menu-grid/menu-waffle.png"
                  alt="Waffles"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-base font-medium text-descGray">Waffles</p>
            </div>
            <div class="flex flex-col items-center gap-2.5 border rounded-md p-1">
              <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="image/menu-grid/menu-mocktails.png"
                  alt="Mocktails"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-base font-medium text-descGray">Mocktails</p>
            </div>
            <div class="flex flex-col items-center gap-2.5 border rounded-md p-1">
              <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="image/menu-grid/menu-beverages.png"
                  alt="Beverages"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-base font-medium text-descGray">Beverages</p>
            </div>
            <div class="flex flex-col items-center gap-2.5 border rounded-md p-1">
              <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="image/menu-grid/menu-drinks.png"
                  alt="Drinks"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-base font-medium text-descGray">Drinks</p>
            </div>
            <div class="flex flex-col items-center gap-2.5 border rounded-md p-1">
              <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="image/menu-grid/menu-desserts.png"
                  alt="Desserts"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-base font-medium text-descGray">Desserts</p>
            </div>
            <div class="flex flex-col items-center gap-2.5 border rounded-md p-1">
              <div class="w-[70px] h-[70px] rounded-full overflow-hidden">
                <img
                  src="image/menu-grid/menu-shakes.png"
                  alt="Shakes"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-base font-medium text-descGray">Shakes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuHeader;
