import { useState, useEffect } from "react";
import { getRandomMeal } from "../../api/api";

const MealCard = () => {
   const [meal, setMeal] = useState([]);

   useEffect(() => {
      getRandomMealData()
   }, [])

   const getRandomMealData = async () => {
      const data = await getRandomMeal();
      setMeal(data.data.meals)
   }

   return (

      <div className="random-meal">
         <div className="container">
            {
               meal.map(meal => {
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

                        <img className="random-meal__img meal__img" src={meal.strMealThumb} alt="food img" />
                     </div>
                  )
               })
            }
         </div>
      </div>

   )
};

export default MealCard;