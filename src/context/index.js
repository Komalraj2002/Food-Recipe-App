import { createContext, useState } from "react";
export const GlobalContext = createContext(null); //createcontext is used with variable GlobalContext

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

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
  console.log(searchParam, loading, recipeList);
  return (
    <GlobalContext.Provider
      value={{ loading, recipeList, searchParam, setSearchParam, handleSubmit }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
