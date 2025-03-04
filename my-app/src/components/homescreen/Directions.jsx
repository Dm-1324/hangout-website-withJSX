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
          <img src="image/direction/map.png" class="container w-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Directions;
