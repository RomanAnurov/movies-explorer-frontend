import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const isLiked = true;
  const location = useLocation();
  const { pathname } = location;

  const cardLikeButtonClassName = `movie-card__like ${
    isLiked && "movie-card__like_active"
  }`;
  return (
    <div className="movie-card">
      <img src="#" className="movie-card__image" alt="Карточка фильма" />
      <div className="movie-card__info">
        <h2 className="movie-card__title">Очень классный фильм</h2>
        {pathname === '/movies' ? (<button className={cardLikeButtonClassName} type="button"></button>):(
          <button className="movie-card__delete" type="button"></button>
        )}
        
      </div>
      <p className="movie-card__duration">1ч 47м</p>
    </div>
  );
}
export default MoviesCard;
