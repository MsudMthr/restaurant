import React, { useState, useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";


import queryString from "query-string";

import MenuItem from "./MenuItem";

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
  const [menu, setMenu] = useState("all dishes");
  const [query, setQuery] = useState([]);

  // const navigate = useNavigate();

  //   useEffect(() => {
  //       setQuery(queryString.parse(window.location.search));
  //     },[menu]);

  const changeHandler = (event) => {
    setMenu(event.target.id);
    // navigate(`?category=${event.target.id}`)
  };

  //   console.log(query);
  //   console.log(menu);

  return (
    <div>
      <ul className="md:w-full flex md:flex-col justify-center flex-wrap   gap-4 mt-16 md:border-r-2 md:pr-5 md:border-b-0 border-b-2 pb-2 border-[#EC6083]">
        {data.map((item) => (
          <Link to={`?category=${item.category}`}>
          <MenuItem
            data={item}
            key={item.category}
            changeHandler={changeHandler}
            menu={menu}
          />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
