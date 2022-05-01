import React, { useState, useEffect } from "react";

import FoodContextProvider from "./Context/FoodContextProvider";
import queryString from "query-string";

import Header from "./components/Header";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/OurServices/Service";

function App() {
  const queryStrings = queryString.parse(window.location.search);
  const [query, setQuery] = useState(queryStrings.category);
  

  useEffect(() => {
    setQuery(queryStrings.category)
  },[])
  
  return (
    <FoodContextProvider query={query}>
      <div className=" bg-gradient-to-br from-[#E9F3FD] via-[#e5e5fe84] to-[#E9F3FD]">
        <div className="container sm:mx-auto px-2   bg-gradient-to-br from-[#E9F3FD] via-[#e5e5fe84] to-[#E9F3FD]">
          <div>
            <Navbar />
            <Header />
            <Service />
            <Menu />
          </div>
        </div>
      </div>
    </FoodContextProvider>
  );
}

export default App;
