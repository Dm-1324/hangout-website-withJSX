import React from "react";

const Waffles = ({ vegOnly }) => {
  const items = [
    {
      id: "veg",
      name: "Apple Juice",
      img: "image/menu-images/juice.png",
      price: 159.0,
    },
    {
      id: "veg",
      name: "Fries And Coke Combo",
      img: "image/menu-images/burgerking.png",
      price: 159.0,
    },
    {
      id: "non-veg",
      name: "Loaded Fries",
      img: "image/menu-images/fries.png",
      price: 159.0,
    },
  ];

  // Filter items if "VEG ONLY" is active
  const filteredItems = vegOnly
    ? items.filter((item) => item.id === "veg")
    : items;

  return (
    <>
      <div className="flex items-center justify-between cursor-pointer">
        <h2 className="text-lg font-semibold text-subHeadBlue">Waffles</h2>
      </div>
      <div>
        <ul className="mt-4 flex flex-col gap-2">
          {filteredItems.map((item) => (
            <li
              key={item.name}
              id={item.id}
              className="flex items-center justify-between bg-white p-2.5 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center gap-2.5">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[60px] h-[60px]"
                />
                <div className="flex flex-col items-start justify-center">
                  <img
                    src={`image/menu-images/tags/${item.id}-tag.png`}
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                  <p className="text-base font-medium">{item.name}</p>
                </div>
              </div>
              <div className="text-lg font-bold text-gridBlue">
                <span>&#8377;</span>
                {item.price.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Waffles;
