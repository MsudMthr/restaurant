import React from "react";
import FoodSlider from "./FoodSlider";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div className="mt-36 lg:ml-14 md:ml-5 text-center md:text-left">
      {/* title */}
      <div className="inline-flex flex-col  sm:w-[470px]">
        <p className="smallTitle">our menu</p>
        <h5 className="title  md:text-left">
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
