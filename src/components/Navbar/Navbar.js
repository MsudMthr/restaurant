import React from "react";
import Menu from "./Menu";

import BurgerIcon from "../../asset/icons/Burger King.svg";
import Icons from "../Icons";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={BurgerIcon} alt="Burger" />
      </div>
      <Menu />
      <Icons />
    </div>
  );
};

export default Navbar;
