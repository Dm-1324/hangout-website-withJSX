import React from "react";

const Header = () => {
  return (
    <header class="header">
      <div class="relative container max-w-6xl px-6 py-14 bg-header-bg bg-contain bg-center filter grayscale opacity-10 shadow-2xl"></div>
      <div class="flex items-center justify-center pb-2">
        <img
          src="image/header/header-logo-1.svg"
          class="my-4 absolute h-28 top-0 object-contain"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
