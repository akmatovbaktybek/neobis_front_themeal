import Home from "./pages/Home/home";
import Recipe from "./pages/Recipe/recipe";
import { Routes, Route } from "react-router-dom";

const App = () => {

   return (
      <>
         <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/recipe/:id" element={<Recipe />} />
         </Routes>
      </>

   );
}

export default App;
