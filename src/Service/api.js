import axios from "axios";

export const getData = async (query) => {
  const API_KEY = "8bc9ac23fa5724f84f0d146077a523e7";
  const BASE_URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=b7fbb890&app_key=${API_KEY}&ingr=${query}&nutrition-type=cooking`;
  const { data } = await axios.get(BASE_URL);

  return data;
};
