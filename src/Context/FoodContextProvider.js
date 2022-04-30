import React, { useState, useEffect , createContext} from "react";
import { getData } from "../Service/api";

export const foodProvider = createContext()

const FoodContextProvider = ({query,children}) => {

    const [food , setFood] = useState([])

    
    useEffect(()=> {
        const fetchData = async(query) => {
            setFood(await getData(query))
        }
        fetchData(query)
    },[])

    console.log(food);

  return <foodProvider.Provider value={food}>
      {children}
  </foodProvider.Provider>;
};

export default FoodContextProvider;
