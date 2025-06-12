
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";  
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div className = "min-h-screen p-6 bg-white text-grey-600 text-lg"   > 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
