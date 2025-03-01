import { useState } from "react";

function Homescreen() {
  return (
    <>
      <header class="header">
        <div class="relative container max-w-8xl px-6 py-14 bg-header-bg bg-contain bg-center filter grayscale opacity-10 shadow-2xl"></div>
        <div class="flex items-center justify-center pb-4">
          <img
            src="image/header/header-logo-image.png"
            class="my-4 absolute h-28 top-0 object-contain"
            alt=""
          />
        </div>
      </header>

      <section id="menu">
        <div class="container max-w-8xl px-6 py-8">
          <div class="flex items-center justify-between mb-4">
            <p class="text-headBlue font-bold text-2xl uppercase">Menu</p>
            <p class="text-descGray font-medium text-lg">
              <a
                href="#"
                class="text-decoration-line-none hover:text-headBlue transition-all duration-300"
              >
                See all
              </a>
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
              <p class="font-medium text-lg text-gridBlue mt-2 pb-2">
                Mocktails
              </p>
            </div>
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
              <p class="font-medium text-lg text-gridBlue mt-2 pb-2">
                Desserts
              </p>
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

      <section id="gallery">
        <div class="container max-w-8xl px-6 py-8">
          <div class="flex items-center justify-between mb-4">
            <p class="text-headBlue font-bold text-2xl uppercase">Gallery</p>
            <p class="text-descGray font-medium text-lg">See all</p>
          </div>
          <div class="grid grid-cols-2 gap-4 items-center justify-center">
            <div class="grid-image flex items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-1.png"
                alt=""
                class="object-cover w-full"
              />
            </div>
            <div class="grid-image flex items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/gallery-grid/gallery-juice.png"
                alt=""
                class="object-cover w-full"
              />
            </div>
            <div class="grid-image flex items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-2.png"
                alt=""
                class="object-cover w-full"
              />
            </div>
            <div class="grid-image flex items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-3.png"
                alt=""
                class="object-cover w-full"
              />
            </div>
            <div class="grid-image flex items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/gallery-grid/gallery-fries.png"
                alt=""
                class="object-cover w-full"
              />
            </div>
            <div class="grid-image flex items-center border border-borderGray rounded-xl shadow-lg overflow-hidden">
              <img
                src="image/gallery-grid/gallery-coke.png"
                alt=""
                class="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about-us">
        <div class="container max-w-8xl px-6 py-8">
          <div class="flex flex-col gap-4 items-start justify-start">
            <p class="text-headBlue font-bold text-2xl uppercase">About Us</p>
            <div className="text-left w-full">
              <p class="text-descGray font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="direction">
        <div class="container max-w-8xl px-6 py-8">
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between mb-4">
              <p class="text-headBlue font-bold text-2xl uppercase">
                Directions
              </p>
              <i class="material-icons text-headBlue">directions</i>
            </div>
            <img
              src="image/direction/map.png"
              class="container w-full"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="address">
        <div class="container max-w-8xl px-6 py-8">
          <div class="flex items-center justify-between mb-4">
            <p class="text-headBlue font-bold text-2xl uppercase">Address</p>
            <i class="material-icons text-headBlue">home</i>
          </div>
          <div class="address-line">
            <p class="text-descGray font-normal text-base">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div class="container max-w-8xl px-6 py-6 mt-4 bg-headBlue">
          <div class="flex flex-col gap-6 items-center justify-center">
            <h3 class="font-normal text-xl text-white">FOLLOW US</h3>
            <div class="flex gap-6 justify-between">
              <div class="logo-image">
                <ion-icon
                  name="logo-instagram"
                  class="h-[24px] w-[24px] text-white"
                ></ion-icon>
              </div>
              <div class="logo-image">
                <ion-icon
                  name="logo-facebook"
                  class="h-[24px] w-[24px] text-white"
                ></ion-icon>
              </div>
              <div class="logo-image">
                <ion-icon
                  name="logo-twitter"
                  class="h-[24px] w-[24px] text-white"
                ></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homescreen;
