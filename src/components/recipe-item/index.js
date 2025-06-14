
import {Link} from "react-router-dom"

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
    <div className="h-40 flex justify-center item-center overflow-hidden  rounded-xl">
   <img src={item?.image_url} alt="recipe item" className="block w-full"   />
    </div>
    <div>
      <span className="text-sm text-cyan-700 font-medium"> {item?.publisher}</span>
      <h3 className="text-black font-bold text-2xl truncate"> {item.title}</h3>
      <Link to = {` /recipe-item/${item?.id}`}  className = " text-sm px-3 mt-5 py-4 rounded-lg uppercase font-medium shadow-md  tracking-wider bg-black text-white" >Recipe Details</Link>
    </div>
    </div>
  );
}
