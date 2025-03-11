import React from "react";

const OtherLocations = () => {
  return (
    <section id="our-other-locations">
      <div class="container max-w-6xl px-6 py-8">
        <div class="flex flex-col gap-4 items-start justify-start">
          <p class="text-headBlue font-bold text-2xl uppercase">
            Our Other Locations
          </p>
          <div className="text-left w-full">
            <ul className="flex flex-col">
              <li className="flex flex-col gap-6 pb-4 border-b-2 border-borderGray">
                <div className=" aspect-w-16 aspect-h-7 overflow-hidden rounded-lg border-borderGray shadow-md">
                  <a
                    href="https://maps.app.goo.gl/dPXwbvyNDGXTRBzb7"
                    target="_blank"
                  >
                    <img
                      src="image/direction/map1.svg"
                      class="object-contain w-full border border-borderGray rounded-lg scale-125"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="https://maps.app.goo.gl/dPXwbvyNDGXTRBzb7"
                    target="_blank"
                  >
                    <p class="text-descGray font-normal text-base">
                      Vivekananda Nagar, Kukatpally, Hyderabad, Telangana 500072
                    </p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherLocations;
