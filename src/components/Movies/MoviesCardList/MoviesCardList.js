import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const {
    movies,
    savedMovieList,
    savedMovies,
    filtredMovies,
    deleteMovieToList,
    handleMoreClick,
    cardsToRender,
  } = props;

  const location = useLocation();
  const { pathname } = location;
  const cards = location.pathname === "/movies" ? movies : filtredMovies;

  return (
    <div className="movie-container">
      <ul className="movie-container__list">
        {cards.map((card) => {
          return (
            <li key={card.id || card.movieId}>
              <MoviesCard
                card={card}
                filtredMovies={filtredMovies}
                savedMovieList={savedMovieList}
                savedMovies={savedMovies}
                deleteMovieToList={deleteMovieToList}
              />
            </li>
          );
        })}
      </ul>

      {pathname === "/movies" && (
        <button
          className={`movie-container__button ${
            filtredMovies.length === cardsToRender.length &&
            "movie-container__button_disabled"
          }`}
          onClick={handleMoreClick}
        >
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
