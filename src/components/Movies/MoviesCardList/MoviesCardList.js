import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";



function MoviesCardList(props) {
  const { movies } = props;
  const location = useLocation();
  const { pathname } = location;
  const cards = movies;

  return (
    <div className="movie-container">
  
          <ul className="movie-container__list">
            {cards.map((card) => {
              return (
                <li key={card.id || card.movieId}>
                  <MoviesCard card={card} />
                </li>
              );
            })}
          </ul>
        
      
      {pathname === "/movies" && (
        <button className="movie-container__button">Ещё</button>
      )}
    </div>
  );
}

export default MoviesCardList;


