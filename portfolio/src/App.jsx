import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
