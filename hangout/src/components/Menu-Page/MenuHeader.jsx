import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Waffles from "../menu-items/Waffles";
import Mocktails from "../menu-items/Mocktails";
import Beverages from "../menu-items/Beverages";
import Drinks from "../menu-items/Drinks";
import Desserts from "../menu-items/Desserts";
import Shakes from "../menu-items/Shakes";

const MenuHeader = () => {
  const offsetTop = 240;
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      setShowLeftArrow(container.scrollLeft > 0);

      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <section id="menu-header" className="w-full bg-white py-3">
          <div className="container max-w-6xl pt-4 px-6 flex items-start justify-between">
            <div className="flex items-center justify-center gap-2.5">
              <Link to="/">
                <ion-icon
                  name="chevron-back-outline"
                  className="w-6 h-6 text-descGray"
                ></ion-icon>
              </Link>
              <h3 className="text-lg font-semibold text-descGray">MENU</h3>
            </div>
            <div className="flex items-start gap-4 justify-center">
              <ion-icon
                name="search-outline"
                className="w-6 h-6 text-descGray"
              ></ion-icon>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section
          id="menu-flex"
          className="w-full bg-white shadow-md pb-6 relative"
        >
          <div
            ref={scrollContainerRef}
            className="container max-w-6xl px-6 py-3 flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
          >
            <button
              onClick={() => scrollToSection("waffles")}
              className="min-w-[80px]"
            >
              <img
                src="image/menu-grid/menu-waffle.png"
                className="w-[70px] h-[70px] rounded-full"
              />
              <p className="text-sm font-medium">Waffles</p>
            </button>
            <button
              onClick={() => scrollToSection("mocktails")}
              className="min-w-[80px]"
            >
              <img
                src="image/menu-grid/menu-mocktails.png"
                className="w-[70px] h-[70px] rounded-full"
              />
              <p className="text-sm font-medium">Mocktails</p>
            </button>
            <button
              onClick={() => scrollToSection("beverages")}
              className="min-w-[80px]"
            >
              <img
                src="image/menu-grid/menu-beverages.png"
                className="w-[70px] h-[70px] rounded-full"
              />
              <p className="text-sm font-medium">Beverages</p>
            </button>
            <button
              onClick={() => scrollToSection("drinks")}
              className="min-w-[80px]"
            >
              <img
                src="image/menu-grid/menu-drinks.png"
                className="w-[70px] h-[70px] rounded-full"
              />
              <p className="text-sm font-medium">Drinks</p>
            </button>
            <button
              onClick={() => scrollToSection("desserts")}
              className="min-w-[80px]"
            >
              <img
                src="image/menu-grid/menu-desserts.png"
                className="w-[70px] h-[70px] rounded-full"
              />
              <p className="text-sm font-medium">Desserts</p>
            </button>
            <button
              onClick={() => scrollToSection("shakes")}
              className="min-w-[80px]"
            >
              <img
                src="image/menu-grid/menu-shakes.png"
                className="w-[70px] h-[70px] rounded-full"
              />
              <p className="text-sm font-medium">Shakes</p>
            </button>
          </div>

          {/* Scroll Indicator Arrows */}
          <div className="absolute bottom-[-20px] left-0 w-full flex justify-between px-6 bg-white pb-2">
            {showLeftArrow && (
              <ion-icon
                name="chevron-back-outline"
                className="w-6 h-6 text-descGray"
              ></ion-icon>
            )}
            {showRightArrow && (
              <ion-icon
                name="chevron-forward-outline"
                className="w-6 h-6 text-descGray"
              ></ion-icon>
            )}
          </div>
        </section>
      </div>

      {/* Menu Items Section */}
      <section id="menuitems" className="mt-[220px]">
        <div className="container max-w-6xl px-6 pt-4 pb-8">
          <ul className="flex flex-col gap-2.5">
            <li id="waffles" className="border-b-2 border-subHeadBorder py-4">
              <Waffles />
            </li>
            <li id="mocktails" className="border-b-2 border-subHeadBorder py-4">
              <Mocktails />
            </li>
            <li id="beverages" className="border-b-2 border-subHeadBorder py-4">
              <Beverages />
            </li>
            <li id="drinks" className="border-b-2 border-subHeadBorder py-4">
              <Drinks />
            </li>
            <li id="desserts" className="border-b-2 border-subHeadBorder py-4">
              <Desserts />
            </li>
            <li id="shakes" className="border-b-2 border-subHeadBorder py-4">
              <Shakes />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuHeader;
