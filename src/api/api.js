import axios from "axios";

const API_DAYLI_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";
const API_SEARCH_MEAL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const API_ID_MEAL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;

export const getRandomMeal = async () => {
   const data = await axios.get(API_DAYLI_MEAL);
   return data;
};

export const getMealByWord = async (word) => {
   const data = await axios.get(`${API_SEARCH_MEAL}${word}`);
   return data;
};

export const getMealById = async (id) => {
   const data = await axios.get(`${API_ID_MEAL}${id}`);
   return data
}


