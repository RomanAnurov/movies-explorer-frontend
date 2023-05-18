import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList() {

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="movie-container">
      <div className="movie-container__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      {pathname === '/movies' && <button className="movie-container__button">Ещё</button>}
    </div>
  );
}

export default MoviesCardList;
