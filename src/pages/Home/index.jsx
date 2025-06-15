import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading) {
    
    <div>Loading...Please wait</div>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center  gap-8 ">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          
          <p className="text-center text-black font-semibold text-xl lg:text-4xl ">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}
