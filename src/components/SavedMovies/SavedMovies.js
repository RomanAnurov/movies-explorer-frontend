import React, { useState, useEffect, useCallback, useMemo } from "react";

import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const {
    onBurgerPopup,
    isLoading,
    isLoggedIn,
    setIsLoading,
    savedMovieList,
    savedMovies,
    deleteMovieToList,
  } = props;

  const [isChecked, setIsChecked] = useState(false);

  const [moviesSearch, setMoviesSearch] = useState("");

  const [filtredMovies, setFiltredMovies] = useState(savedMovies);

  const [preloderMessage, setPreloderMessage] = useState(false);

  /* function handleSearchMovies(isChecked) {
    setIsLoading(true);
    setFiltredMovies(
      savedMovies.filter((movie) => {
        const str = moviesSearch.toLowerCase();
        const filtredMovieInclud =
          movie.nameRU.toLowerCase().includes(str) ||
          movie.nameEN.toLowerCase().includes(str);

        return isChecked
          ? filtredMovieInclud
          : movie.duration > 40 && filtredMovieInclud;
      })
    );
    setIsLoading(false);
    setPreloderMessage(true);
    console.log(filtredMovies);
  } */

   const handleSearchMovies = useCallback(async () => {
    setIsLoading(true);
    setFiltredMovies(
      savedMovies.filter((movie) => {
        const str = moviesSearch.toLowerCase();
        const filtredMovieInclud =
          movie.nameRU.toLowerCase().includes(str) ||
          movie.nameEN.toLowerCase().includes(str);

        return isChecked
          ? filtredMovieInclud
          : movie.duration > 40 && filtredMovieInclud;
      })
    );
    setIsLoading(false);
    setPreloderMessage(true);
    console.log(filtredMovies);
  }, [filtredMovies, isChecked, moviesSearch, savedMovies, setIsLoading]);  

 
  

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
            page="saved-movies"
            isLoading={isLoading}
            filtredMovies={filtredMovies}
            preloderMessage={preloderMessage}
            savedMovieList={savedMovieList}
            savedMovies={savedMovies}
            deleteMovieToList={deleteMovieToList}
            handleSearchMovies={handleSearchMovies}
          />
        </>
      )}
      <Footer />
      <BurgerPopup />
    </section>
  );
}
export default SavedMovies;
