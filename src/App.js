import React from "react";
import {Route,Routes} from 'react-router-dom';

import './App.css'
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="w-full m-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
