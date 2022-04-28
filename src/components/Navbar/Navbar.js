import React from "react";
import Menu from "./Menu";

import BurgerIcon from "../../asset/icons/Burger King.svg";
import Icons from "./Icons";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <img src={BurgerIcon} alt="Burger" className="mt-5 mx-auto" />
      </div>
      <Menu />
      <Icons />
    </div>
  );
};

export default Navbar;
