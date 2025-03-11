import React from "react";

const Directions = () => {
  return (
    <section id="direction">
      <div class="container max-w-6xl px-6 py-8">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between mb-4">
            <p class="text-headBlue font-bold text-2xl uppercase">Directions</p>
            <i class="material-icons text-headBlue">directions</i>
          </div>
          <div className=" aspect-w-16 aspect-h-7">
            <img
              src="image/direction/map1.svg"
              class="object-contain w-full border border-borderGray rounded-lg shadow-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
