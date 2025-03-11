import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="container max-w-6xl px-6 py-6 mt-8 bg-headBlue">
        <div class="flex flex-col gap-6 items-center justify-center">
          <h3 class="font-semibold text-xl text-white">FOLLOW US</h3>
          <div class="flex gap-6 justify-between">
            <a
              href="https://www.instagram.com/hangoutworld?igsh=YmdidGY1eXVwbmY3"
              target="_blank"
            >
              <div class="logo-image">
                <ion-icon
                  name="logo-instagram"
                  class="h-[24px] w-[24px] text-white"
                ></ion-icon>
              </div>
            </a>
            <a
              href="https://www.facebook.com/share/18kvZDPWcQ/"
              target="_blank"
            >
              <div class="logo-image">
                <ion-icon
                  name="logo-facebook"
                  class="h-[24px] w-[24px] text-white"
                ></ion-icon>
              </div>
            </a>
            <div class="logo-image">
              <ion-icon
                name="logo-twitter"
                class="h-[24px] w-[24px] text-white"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
