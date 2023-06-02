import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { API__URL } from "../../../utils/constants";

function MoviesCard(props) {
  const {card} = props;
  const isLiked = true;
  const location = useLocation();
  const { pathname } = location;

  const cardLikeButtonClassName = `movie-card__like ${
    isLiked && "movie-card__like_active"
  }`;
  return (
    <div className="movie-card">
      <img src={card.image.url ? `${API__URL}${card.image.url}` : card.image} className="movie-card__image" alt={card.nameRU} />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{`${card.nameRU}`}</h2>
        {pathname === '/movies' ? (<button className={cardLikeButtonClassName} type="button"></button>):(
          <button className="movie-card__delete" type="button"></button>
        )}
        
      </div>
      <p className="movie-card__duration">{card.duration}</p>
    </div>
  );
}
export default MoviesCard;
