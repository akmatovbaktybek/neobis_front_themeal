import { useState } from "react";
import { getMealByWordData } from "../../api/api";

const Search = () => {
   const [searchWord, setSearchWord] = useState('');

   const inputHandler = (e) => {
      setSearchWord(e.target.value)
   }

   const buttonHundler = (e) => {
      getMealByWordData(searchWord)
   }

   const formHandler = (e) => {
      e.preventDefault();
   }

   return (
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
   )
};

export default Search;