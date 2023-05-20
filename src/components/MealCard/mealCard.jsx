import { useEffect, useState } from "react";
import { getRandomMeal } from "../../api/api";
import { Link } from "react-router-dom";
// import Recipe from "../../pages/Recipe/recipe";

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
      <>
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
                              <Link to="/recipe" className="random-meal__link"><h1 className="random-meal__title meal__title">{meal.strMeal}</h1></Link>
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
         {/* <Routes>
            <Route path="/recipe" elemen={<Recipe />} />
         </Routes> */}
      </>

   )
};

export default MealCard;