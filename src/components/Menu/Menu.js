import React, { useEffect } from "react";
import FoodSlider from "./FoodSlider";
import MenuItems from "./MenuItems";

import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-36 lg:ml-14 md:ml-5 text-center md:text-left">
      {/* title */}
      <div className="inline-flex flex-col  sm:w-[470px]">
        <p
          className="smallTitle"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          our menu
        </p>
        <h5
          className="title  md:text-left"
          data-aos="fade-left"
          data-aos-easing="ease-out-sine"
          data-aos-offset="100"
        >
          menu that always make you fall in love
        </h5>
      </div>
      {/* slider & menu */}
      <div className="flex flex-col md:flex-row gap-3 w-full items-center ">
        <MenuItems />
        <FoodSlider />
      </div>
    </div>
  );
};

export default Menu;
