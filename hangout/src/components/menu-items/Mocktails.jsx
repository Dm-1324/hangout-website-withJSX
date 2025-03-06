import React from "react";

const Mocktails = () => {
  return (
    <>
      <div className="flex items-center justify-between cursor-pointer">
        <h2 className="text-lg font-semibold text-subHeadBlue">Mocktails</h2>
      </div>
      <div>
        <ul className="mt-4 flex flex-col gap-2">
          <li className="flex items-center justify-between bg-white p-2.5 rounded-lg">
            <div className="flex items-center justify-center gap-2.5">
              <img
                src="image/menu-images/juice.png"
                alt=""
                className="w-[60px] h-[60px]"
              />
              <div className="flex flex-col items-start justify-center">
                <img
                  src="image/menu-images/tags/veg-tag.png"
                  alt=""
                  className="w-[16px] h-[16px] "
                />
                <p className="text-base font-medium">Food Name</p>
              </div>
            </div>
            <div className="text-lg font-bold text-gridBlue">
              <span>&#8377;</span>159.00
            </div>
          </li>
          <li className="flex items-center justify-between bg-white p-2.5 rounded-lg">
            <div className="flex items-center justify-center gap-2.5">
              <img
                src="image/menu-images/burgerking.png"
                alt=""
                className="w-[60px] h-[60px]"
              />
              <div className="flex flex-col items-start justify-center">
                <img
                  src="image/menu-images/tags/veg-tag.png"
                  alt=""
                  className="w-[16px] h-[16px] "
                />
                <p className="text-base font-medium">Food Name</p>
              </div>
            </div>
            <div className="text-lg font-bold text-gridBlue">
              <span>&#8377;</span>159.00
            </div>
          </li>
          <li className="flex items-center justify-between bg-white p-2.5 rounded-lg">
            <div className="flex items-center justify-center gap-2.5">
              <img
                src="image/menu-images/fries.png"
                alt=""
                className="w-[60px] h-[60px]"
              />
              <div className="flex flex-col items-start justify-center">
                <img
                  src="image/menu-images/tags/veg-tag.png"
                  alt=""
                  className="w-[16px] h-[16px] "
                />
                <p className="text-base font-medium">Food Name</p>
              </div>
            </div>
            <div className="text-lg font-bold text-gridBlue">
              <span>&#8377;</span>159.00
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mocktails;
