import React from "react";
import { Link } from "react-router";

const GalleryPage = () => {
  return (
    <>
      <section id="gallery-header">
        <div className="container max-w-6xl px-6 pt-8 mb-4">
          <div className="flex items-center justify-start gap-2.5">
            <Link to="/">
              <ion-icon
                name="chevron-back-outline"
                class="w-6 h-6 text-descGray"
              ></ion-icon>
            </Link>

            <h3 class="text-lg font-semibold text-descGray mb-1.5">GALLERY</h3>
          </div>
        </div>
      </section>
      <section id="gallery-grid">
        <div className="container max-w-6xl px-6 pt-2 pb-4 mb-4">
          <div class="grid grid-cols-2 gap-4 items-center justify-between mx-auto p-4">
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-1.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-juice.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-2.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-3.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-fries.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-coke.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-1.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-juice.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-2.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-burger-3.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-fries.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
            <div class="grid-image flex items-center overflow-hidden">
              <img
                src="image/gallery-grid/gallery-coke.png"
                alt=""
                class="object-cover w-[180px] h-[180px] border border-borderGray rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
