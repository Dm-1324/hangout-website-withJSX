import React from "react";

const Address = () => {
  return (
    <section id="address">
      <div class="container max-w-6xl px-6 py-8">
        <div class="flex items-center justify-between mb-4">
          <p class="text-headBlue font-bold text-2xl uppercase">Address</p>
          <i class="material-icons text-headBlue">home</i>
        </div>
        <div class="address-line">
          <p class="text-descGray font-normal text-base">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
        </div>
      </div>
    </section>
  );
};

export default Address;
