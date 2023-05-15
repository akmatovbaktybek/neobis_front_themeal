import axios from "axios";
import { useState, useEffect } from "react";

const API_DAYLI_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";
const MealCard = () => {
   const [meal, setMeal] = useState([]);

   useEffect(() => {
      axios
         .get(API_DAYLI_MEAL)
         .then(
            data => {
               setMeal(data.data.meals);
            }
         )
   }, []);

   console.log(meal);

   return (
      <div className="container">
         <div className="random-meal">
            {
               meal.map(
                  meal => {
                     return (
                        <div key={meal.idMeal} className="random-meal__content">
                           <div className="random-meal__description">
                              <h2 className="random-meal__day-meal title">
                                 Meal of the day
                              </h2>
                              <a href="/" className="random-meal__link"><h1 className="random-meal__title">{meal.strMeal}</h1></a>
                              <div className="random-meal__category-country">
                                 {meal.strCategory} | {meal.strArea}
                              </div>
                           </div>

                           <img className="random-meal__img" src={meal.strMealThumb} alt="food img" />
                        </div>
                     )
                  }
               )
            }
         </div>
      </div>

   )
};

export default MealCard;