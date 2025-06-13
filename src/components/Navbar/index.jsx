import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {

  const { searchParam , setSearchParam , handleSubmit } = useContext(GlobalContext)  

console.log(searchParam)
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl ont-semibold">
        <NavLink to="/" className="text-black hover:text-grey-700 duration-300">
          Food Recipie App
        </NavLink>
      </h2>
     <form onSubmit={handleSubmit}>
       <input
        type="text"
        name="search"
        value={searchParam }
        onChange={(event)=>setSearchParam(event.target.value)}
        placeholder="Enter item...."
        className="bg-white/75 rounded-full p-3 px-8 outline-none lg:w-96 shadow-lg shadow-red-200 focus:shadow-red-200"
      />
     </form >
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className="text-black hover:text-grey-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className="text-black hover:text-grey-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
