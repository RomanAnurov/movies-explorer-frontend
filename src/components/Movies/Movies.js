import React, { useState } from "react";

import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const { onBurgerPopup, isLoading, isLoggedIn, allMovies, setIsLoading } =
    props;

  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isShort") === "true"
  );

  const [moviesSearch, setMoviesSearch] = useState(
    localStorage.getItem("moviesSearch") || ""
  );
  const [filtredMovies, setFiltredMovies] = useState(
    localStorage.getItem("filtredMovies")
      ? JSON.parse(localStorage.getItem("filtredMovies"))
      : []
  );

  const [preloderMessage, setPreloderMessage] = useState(false);

  function handleSearchMovies(isChecked) {
    setIsLoading(true);
    const movies = allMovies.filter((movie) => {
      const str = moviesSearch.toLowerCase();
      const filtredMovieInclud =
        movie.nameRU.toLowerCase().includes(str) ||
        movie.nameEN.toLowerCase().includes(str);

      return isChecked
        ? filtredMovieInclud
        : movie.duration > 40 && filtredMovieInclud;
    });

    setFiltredMovies(movies)
    setIsLoading(false);
    localStorage.setItem("filtredMovies", JSON.stringify(movies));
    localStorage.setItem("moviesSearch", moviesSearch);
    localStorage.setItem("isShort", isChecked.toString());
    setPreloderMessage(true);

    console.log(movies);
  }

  return (
    <section className="movies">
      <Header onBurgerPopup={onBurgerPopup} isLoggedIn={isLoggedIn} />
      <SearchForm
        moviesSearch={moviesSearch}
        setMoviesSearch={setMoviesSearch}
        handleSearchMovies={handleSearchMovies}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {filtredMovies.length === 0 &&
            (preloderMessage ? <Preloader text={"Ничего не найдено"} /> : null)}
          <MoviesCardList
            isLoading={isLoading}
            movies={filtredMovies}
            filtredMovies={filtredMovies}
            preloderMessage={preloderMessage}

          />
        </>
      )}
      <Footer />
      <BurgerPopup />
    </section>
  );
}

export default Movies;
