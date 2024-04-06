import { Route, Routes } from "react-router-dom";
import "./App.css";

import  Homepage  from "./Pages/Homepage";
import HotelRegister from "./Pages/HotelRegister";
import UserRegister from "./Pages/UserRegister";
import Login from "./Pages/Login";
import Workshop from "./Pages/Workshop";
import MindCare from "./Pages/MindCare";
import Fitnesspage from "./Pages/Fitnesspage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fitness" element={<Fitnesspage/>} />
        <Route path="/workshop" element={<Workshop/>} />
        <Route path="/mindcare" element={<MindCare/>} />
        <Route path="/hotelregister" element={<HotelRegister/>} />
        <Route path="/userregister" element={<UserRegister/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
     
    </div>
  );
}

export default App;