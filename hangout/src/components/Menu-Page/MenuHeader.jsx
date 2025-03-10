import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Waffles from "../menu-items/Waffles";
import Mocktails from "../menu-items/Mocktails";
import Beverages from "../menu-items/Beverages";
import Drinks from "../menu-items/Drinks";
import Desserts from "../menu-items/Desserts";
import Shakes from "../menu-items/Shakes";

const MenuHeader = () => {
  const offsetTop = 260;
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Handle query parameter redirection on load
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    if (category) {
      scrollToSection(category); // Automatically scroll to the selected category
    }
  }, [location]);

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
              <div className="flex flex-col gap-2.5 items-center">
                <button className="relative w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition duration-300">
                  <div className="w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 translate-x-0"></div>
                </button>
                <span className="text-xs text-descGray">VEG ONLY</span>
              </div>
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
          className="w-full bg-white shadow-md mt-2 pb-4 overflow-x-auto scrollbar-hide"
        >
          {/* Scroll Indicator Arrows */}
          <div className="absolute top-[60%] left-0 w-full flex items-center justify-between px-2 pb-2 mb-2 z-5 pointer-events-none">
            {showLeftArrow && (
              <ion-icon
                name="chevron-back-outline"
                className="w-5 h-5 text-descGray"
              ></ion-icon>
            )}
            {showRightArrow && (
              <ion-icon
                name="chevron-forward-outline"
                className="w-5 h-5 text-descGray"
              ></ion-icon>
            )}
          </div>
          <div
            ref={scrollContainerRef}
            className="container max-w-6xl px-6 py-3 flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide z-20"
          >
            {[
              { id: "waffles", img: "menu-waffle.png", label: "Waffles" },
              {
                id: "mocktails",
                img: "menu-mocktails.png",
                label: "Mocktails",
              },
              {
                id: "beverages",
                img: "menu-beverages.png",
                label: "Beverages",
              },
              { id: "drinks", img: "menu-drinks.png", label: "Drinks" },
              { id: "desserts", img: "menu-desserts.png", label: "Desserts" },
              { id: "shakes", img: "menu-shakes.png", label: "Shakes" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col gap-2.5 items-center min-w-[80px]"
              >
                <img
                  src={`image/menu-grid/${item.img}`}
                  className="w-[70px] h-[70px] rounded-full"
                  alt={item.label}
                />
                <p className="text-sm font-medium">{item.label}</p>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Menu Items Section */}
      <section id="menuitems" className="mt-[240px]">
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
