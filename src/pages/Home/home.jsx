import { useEffect, useState } from "react";
import { getMealById, getRandomMeal } from "../../api/api";
import { Link } from "react-router-dom";
import { getMealByWord } from "../../api/api"
// import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/header";
// import Recipe from "../Recipe/recipe";

const Home = () => {
   const [meal, setMeal] = useState([]);
   const [serchMeal, setSerchMeal] = useState([]);

   //значение для поиска
   const [searchWord, setSearchWord] = useState('');

   // для получения блюда дня
   useEffect(() => {
      getRandomMealData()
   }, [])

   const getRandomMealData = async () => {
      const data = await getRandomMeal();
      setMeal(data.data.meals)
   }

   // для получения блюда по поиску
   useEffect(() => {
      getMealByWordData('egg')
   }, [])

   const getMealByWordData = async (word) => {
      const data = await getMealByWord(word);
      setSerchMeal(data.data.meals)
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

   // для полчуения данных по id
   useEffect(() => {
      getMealById()
   }, [])

   return (
      <>
         <Header />

         {/* блюдо дня */}
         <div className="random-meal">
            <div className="container">
               {
                  meal.map(meal => {
                     return (
                        <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal} className="random-meal__link">
                           <div className="random-meal__content">
                              <div className="random-meal__description">
                                 <h2 className="random-meal__day-meal title">
                                    Meal of the day
                                 </h2>
                                 <h1 className="random-meal__title meal__title">{meal.strMeal}</h1>
                                 <div className="random-meal__category-country">
                                    {meal.strCategory} | {meal.strArea}
                                 </div>
                              </div>

                              <img className="random-meal__img meal__img" src={meal.strMealThumb} alt="food img" />
                           </div>
                        </Link>
                     )
                  })
               }
            </div>
         </div >
         {/* блюдо дня */}

         {/* блюдо по поиску */}
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
                     serchMeal.map(meal => {
                        return (
                           <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal} className="meal-list__link">
                              <div className="meals-list__item" >
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
                           </Link>
                        )
                     })
                  }
               </div>

            </div>
         </div >
         {/* блюдо по поиску */}

         {/* 
         <Routes>
            <Route path="/Recipe" elemen={<Recipe />} />
         </Routes> */}
      </>
   )
};

export default Home;