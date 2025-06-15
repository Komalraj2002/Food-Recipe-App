import { createContext, useState } from "react";
export const GlobalContext = createContext(null); //createcontext is used with variable GlobalContext

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const result = await res.json();
      //   console.log("1111111111" ,result);
      //   console.log("222" , result?.data?.recipes)
      if (result?.data?.recipes) {
        setRecipeList(result?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorites(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoriteList = [...favoritesList];
    const index = cpyFavoriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      // if item not present in cpyfavoritelist
      cpyFavoriteList.push(getCurrentItem);
    } else {
      cpyFavoriteList.splice(getCurrentItem);
    }
    setFavoritesList(cpyFavoriteList);
  }

  console.log( "favoritesList" ,  favoritesList);
  return (
    <GlobalContext.Provider
      value={{
        loading,
        recipeList,
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailData,
        handleAddToFavorites,
        favoritesList,
      
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
