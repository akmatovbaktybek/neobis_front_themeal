import Header from "../../components/Header/header";
import MealCard from "../../components/MealCard/mealCard";
import SearchedMealList from "../../components/SerchedMealList/searchedMealList";

const Home = () => {

   return (
      <div>
         <Header />
         <MealCard />
         <SearchedMealList />
      </div>
   )
};

export default Home;