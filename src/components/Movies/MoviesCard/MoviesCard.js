import React, { useMemo } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { API__URL } from "../../../utils/constants";
import { formatLength } from "../../../utils/functionsUtils";

function MoviesCard(props) {
  const { card, savedMovies, savedMovieList, deleteMovieToList } = props;

  const location = useLocation();
  const { pathname } = location;

  const isLiked = useMemo(() => {
    return savedMovies.some((m) => m.movieId === card.id);
  }, [card, savedMovies]);

  function handleLikeMovie() {
    !isLiked ? savedMovieList(card) : deleteMovieToList(card);
  }

  const cardLikeButtonClassName = `movie-card__like ${
    isLiked && "movie-card__like_active"
  }`;

  function handleDeleteMovie() {
    
    return deleteMovieToList(card);
    
  }

  return (
    <div className="movie-card">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
      <img
        src={card.image.url ? `${API__URL}${card.image.url}` : card.image}
        className="movie-card__image"
        alt={card.nameRU}
      />
      </a>
      <div className="movie-card__info">
        <h2 className="movie-card__title">{`${card.nameRU}`}</h2>
        {pathname === "/movies" ? (
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeMovie}
            type="button"
          ></button>
        ) : (
          <button
            className="movie-card__delete"
            onClick={handleDeleteMovie}
            type="button"
          ></button>
        )}
      </div>
      <p className="movie-card__duration">{formatLength(card.duration)}</p>
    </div>
  );
}
export default MoviesCard;
