import React, { useState, useCallback, useEffect, useMemo } from "react";

import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import Preloader from "../Preloader/Preloader";
import { debounce } from "../../utils/functionsUtils";
import { SCREEN__RENDERMOVIES } from "../../utils/constants";

function Movies(props) {
  const {
    onBurgerPopup,
    isLoading,
    isLoggedIn,
    allMovies,
    setIsLoading,
    savedMovieList,
    deleteMovieToList,
    savedMovies,
  } = props;

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(1);

  function handleSearchMovies(isChecked) {
    setIsLoading(true);
    const movies = allMovies.filter((movie) => {
      const str = moviesSearch.toLowerCase();
      const filtredMovieInclud =
        movie.nameRU.toLowerCase().includes(str) ||
        movie.nameEN.toLowerCase().includes(str);

      return isChecked
        ? filtredMovieInclud
        : movie.duration < 40 && filtredMovieInclud;
    });

    setFiltredMovies(movies);
    setIsLoading(false);
    localStorage.setItem("filtredMovies", JSON.stringify(movies));
    localStorage.setItem("moviesSearch", moviesSearch);
    localStorage.setItem("isShort", isChecked.toString());
    setPreloderMessage(true);

    console.log(movies);
  }

  useEffect(() => {
    localStorage.setItem("isShort", isChecked.toString());
  }, [isChecked]);

  const handleResize = useCallback(
    debounce(() => {
      setScreenWidth(window.innerWidth);
    }, 1000),
    []
  );

  const cardsToRender = useMemo(() => {
    const countToRender =
      screenWidth < SCREEN__RENDERMOVIES.small
        ? SCREEN__RENDERMOVIES.smallCount
        : screenWidth < SCREEN__RENDERMOVIES.middle
        ? SCREEN__RENDERMOVIES.middleCount
        : SCREEN__RENDERMOVIES.largeCount;

    return filtredMovies.slice(0, countToRender * page);
  }, [filtredMovies, page, screenWidth]);

  const handleMoreClick = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="movies">
      <Header onBurgerPopup={onBurgerPopup} isLoggedIn={isLoggedIn} />
      <SearchForm
        moviesSearch={moviesSearch}
        setMoviesSearch={setMoviesSearch}
        handleSearchMovies={handleSearchMovies}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setPreloderMessage={setPreloderMessage}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {filtredMovies.length === 0 &&
            (preloderMessage ? <Preloader text={"Ничего не найдено"} /> : null)}
          <MoviesCardList
            isLoading={isLoading}
            movies={cardsToRender}
            filtredMovies={filtredMovies}
            preloderMessage={preloderMessage}
            savedMovieList={savedMovieList}
            savedMovies={savedMovies}
            deleteMovieToList={deleteMovieToList}
            handleMoreClick={handleMoreClick}
            setPreloderMessage={setPreloderMessage}
            cardsToRender={cardsToRender}
          />
        </>
      )}
      <Footer />
      <BurgerPopup />
    </section>
  );
}

export default Movies;
