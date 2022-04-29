import React from "react";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div className="mt-36 lg:ml-14 md:ml-5 text-center md:text-left">
        {/* title */}
      <div className="inline-flex flex-col  w-[470px]">
        <p className="smallTitle">our menu</p>
        <h5 className="title  md:text-left">
          menu that always make you fall in love
        </h5>
      </div>
      {/* slider & menu */}
      <div>
          <MenuItems />
      </div>
    </div>
  );
};

export default Menu;
