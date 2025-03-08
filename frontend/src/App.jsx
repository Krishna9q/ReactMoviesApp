
import React from "react";
import Home from "./Pages/Home";
import MovieCard from "./components/MovieCard";
import Favorites from "./Pages/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/App.css"
import { MovieProvider } from "./context/MovieContext";
const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
