import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import queryString from "query-string";

import MenuItem from "./MenuItem";

import AOS from "aos";
import "aos/dist/aos.css";

//images
import all from "../../asset/Refreshments.png";
import burger from "../../asset/Hamburger.png";
import pizza from "../../asset/Pizza.png";
import taco from "../../asset/Taco.png";
import salad from "../../asset/Green Salad.png";
import doughnut from "../../asset/Doughnut.png";
import soda from "../../asset/Soda.png";

const data = [
  {
    image_src: all,
    category: "all dishes",
  },
  {
    image_src: burger,
    category: "Hamburger",
  },
  {
    image_src: pizza,
    category: "pizza",
  },
  {
    image_src: taco,
    category: "taco",
  },
  {
    image_src: salad,
    category: "salad",
  },
  {
    image_src: doughnut,
    category: "doughnut",
  },
  {
    image_src: soda,
    category: "soda",
  },
];

const MenuItems = (props) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(() => {
    if (queryString.category) {
      return queryString.category;
    } else {
      return "all dishes";
    }
  });
  const [query, setQuery] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  const changeHandler = (event) => {
    setMenu(event.target.id);
    navigate(`?category=${menu}`);
  };

  //   console.log(query);
  //   console.log(menu);

  return (
    <div>
      <ul
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        className="md:w-full flex md:flex-col justify-center flex-wrap   gap-4 mt-16 md:border-r-2 md:pr-5 md:border-b-0 border-b-2 pb-2 border-[#EC6083]"
      >
        {data.map((item) => (
          <MenuItem
            data={item}
            key={item.category}
            changeHandler={changeHandler}
            menu={menu}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
