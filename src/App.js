import MealCard from './components/MealCard/mealCard';
// import Header from './components/Header/header';
// import Home from "./pages/Home/home";

function App() {

   return (
      <div className="App">

         <header className="header">
            The Meal
         </header>

         <MealCard />

         <form className='search-form'>
            <div className='container'>
               <div className='search-form__content'>
                  <h2 className='search-form title'>Find your Meal</h2>
                  <div className='search-form__box'>
                     <input className='search-form__input' type="text" placeholder='Find your meal' />
                     <button className='search-form__button'>Search</button>
                  </div>
               </div>
            </div>
         </form>

      </div>
   );
}

export default App;
