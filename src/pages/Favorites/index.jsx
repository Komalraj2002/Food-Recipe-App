import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);
 
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center  gap-8 ">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="text-center text-black font-semibold text-xl lg:text-4xl ">
            Nothing is added.
          </p>
        </div>
      )}
    </div>
  );
}
