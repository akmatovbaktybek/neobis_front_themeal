import Header from "../../components/Header/header";
import { useEffect, useState } from "react";
import { getMealById } from "../../api/api";
import { useParams } from "react-router-dom";

const Recipe = () => {
   const { id } = useParams();

   const [meal, setMeal] = useState([]);


   useEffect(() => {
      getMealByIdData(id)
   }, []);

   const getMealByIdData = async (id) => {
      const data = await getMealById(id);
      setMeal(data.data.meals)
      console.log(data);

   }

   return (
      <>
         <Header />
         <div className="recipe">
            <div className="container">
               {
                  meal.map(meal => {
                     return (
                        <div key={meal.idMeal} className="recipe__content">
                           <div className="recipe__info">
                              <div className="recipe__info-description">
                                 <h2 className="recipe__info-title meal__title">
                                    {meal.strMeal}
                                 </h2>
                                 <div className="recipe__info-country-category">
                                    {meal.strCategory} | {meal.strArea}
                                 </div>
                                 <ul className="recipe__info-list">
                                    <li className="recipe__info-list-item">- {meal.strIngredient1} {meal.strMeasure1}</li>
                                    <li className="recipe__info-list-item">- {meal.strIngredient2} {meal.strMeasure2}</li>
                                    <li className="recipe__info-list-item">- {meal.strIngredient3} {meal.strMeasure3}</li>
                                    <li className="recipe__info-list-item">- {meal.strIngredient4} {meal.strMeasure4}</li>
                                    <li className="recipe__info-list-item">- {meal.strIngredient5} {meal.strMeasure5}</li>
                                    <li className="recipe__info-list-item">- {meal.strIngredient6} {meal.strMeasure6}</li>
                                    <li className="recipe__info-list-item">- {meal.strIngredient7} {meal.strMeasure7}</li>
                                    <li className="recipe__info-list-item">- {meal.strIngredient8} {meal.strMeasure8}</li>
                                    <li className="recipe__info-list-item">- {meal.strIngredient9} {meal.strMeasure9}</li>
                                 </ul>
                              </div>
                              <div className="recipe__info-img">
                                 <img className="meal__img " src={meal.strMealThumb} alt="food img" />
                              </div>
                           </div>
                           <div className="recipe__instruction">
                              <h2 className="recipe__instruction-title title">Instruction</h2>
                              <p className="recipe__instruction-description">{meal.strInstructions}</p>
                           </div>

                           <div className="recipe__watch-btn">
                              <a className="recipe__btn" href={meal.strYoutube} target="blank">Watch on YouTube</a>
                           </div>
                        </div>

                     )
                  })
               }
            </div>
         </div>
      </>
   );
};

export default Recipe;