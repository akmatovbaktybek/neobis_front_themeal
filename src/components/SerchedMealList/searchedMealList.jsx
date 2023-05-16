import { useState, useEffect } from "react";
import { getMealByWord } from "../../api/api"

const SearchedMealList = () => {
   const [meal, setMeal] = useState([]);
   const [searchWord, setSearchWord] = useState('');

   useEffect(() => {
      getMealByWordData('egg')
   }, [])

   const getMealByWordData = async (word) => {
      const data = await getMealByWord(word);
      setMeal(data.data.meals)
   }

   const inputHandler = (e) => {
      setSearchWord(e.target.value)
   }

   const buttonHundler = () => {
      getMealByWordData(searchWord)
   }

   const formHandler = (e) => {
      e.preventDefault();
   }

   return (
      <div className="search">
         <form className='search-form' onSubmit={formHandler}>
            <div className='container'>
               <div className='search-form__content'>
                  <h2 className='search-form title'>Find your Meal</h2>
                  <div className='search-form__box'>
                     <input className='search-form__input' type="text" placeholder='Find your meal' value={searchWord} onChange={inputHandler} />
                     <button className='search-form__button' onClick={buttonHundler}>Search</button>
                  </div>
               </div>
            </div>
         </form>

         <div className="meals-list">
            <div className="container">
               {
                  meal.map(meal => {
                     return (
                        <div className="meals-list__item" key={meal.idMeal}>
                           <img className="meals-list__item-img meal__img" src={meal.strMealThumb} alt="food img" />
                           <div className="meals-list__item-description">
                              <div className="meals-list__item-title">
                                 {meal.strMeal}
                              </div>
                              <div className="meals-list__item-country-category">
                                 {meal.strCategory} | {meal.strArea}
                              </div>
                           </div>
                        </div>
                     )
                  })
               }
            </div>

         </div>
      </div>
   )
}

export default SearchedMealList;