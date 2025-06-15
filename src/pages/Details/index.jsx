import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useEffect } from "react";

export default function Details() {
  const { id } = useParams(); //used for getting the data from url
  const {
    recipeDetailsData,
    setRecipeDetailData,
    favoritesList,
    handleAddToFavorites,
  } = useContext(GlobalContext);
  //   console.log("11111", id);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      console.log(result);
      if (result?.data) {
        setRecipeDetailData(result?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            className="w-full h-full object-cover block group-hover:scale-105 duration-500"
            src={recipeDetailsData?.recipe.image_url}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe.publisher}
        </span>
        <h3 className="text-black font-bold text-2xl truncate">
          {recipeDetailsData?.recipe.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorites(recipeDetailsData?.recipe)}
            className="text-white bg-black uppercase rounded p-3 text-sm font-medium tracking-wider mt-3 inline-block shadow-md"
          >
            {favoritesList &&
            favoritesList.length &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove From Favorites"
              : "Add To Favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients</span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredients) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {" "}
                  {ingredients.quantity} {ingredients.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredients.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
