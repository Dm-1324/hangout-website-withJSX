import React from "react";

const Gallery = () => {
  return (
    <section id="gallery">
      <div class="container max-w-6xl px-6 py-8">
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
  );
};

export default Gallery;
