import React, { useState, useContext, useEffect } from "react";

//context
import { foodProvider } from "../../Context/FoodContextProvider";
//image
import humber from "../../asset/burger1 1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Pagination } from "swiper";
import FoodCard from "./FoodCard";

const FoodSlider = () => {
  const [foods, setFoods] = useState([]);

  const food = useContext(foodProvider);

  useEffect(() => {
    setFoods(food.hints);
  }, [food]);
  console.log(foods);

  return (
    <div className="w-full overflow-hidden flex justify-center items-center z-0">
      <Swiper
        slidesPerView={4}
        spaceBetween={64}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full z-0 overflow-visible py-10 "
      >
        {foods ? (
          <div className="flex gap-12 w-full ">
            {foods.map((food) => (
              <>
                <SwiperSlide
                  key={food.food.foodId}
                  
                  className="-z-10 overflow-visible w-[300px] h-[400px] py-10 "
                >
                  <FoodCard food={food.food} img={humber} price={"$35"} />
                </SwiperSlide>
              </>
            ))}
          </div>
        ) : (
          <h1>loading ...</h1>
        )}
      </Swiper>
    </div>
  );
};

export default FoodSlider;
