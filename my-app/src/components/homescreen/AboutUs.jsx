import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div class="container max-w-8xl px-6 py-8">
        <div class="flex flex-col gap-4 items-start justify-start">
          <p class="text-headBlue font-bold text-2xl uppercase">About Us</p>
          <div className="text-left w-full">
            <p class="text-descGray font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
