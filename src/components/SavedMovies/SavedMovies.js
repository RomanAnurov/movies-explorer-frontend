import React, { useState, useCallback, useMemo } from "react";

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

  const [filterString, setFilterString] = useState("");

  const [preloderMessage, setPreloderMessage] = useState(false);
 
  const handleSearchMovies = useCallback(async () => {
    
    if (!moviesSearch) {
      setPreloderMessage(true);
    }

    setFilterString(moviesSearch);
  }, [moviesSearch]);

  const filtredMovies = useMemo(() => {
    setIsLoading(true);
    return savedMovies.filter((movie) => {
      const str = filterString.toLowerCase();
      const filtredMovieInclud =
        movie.nameRU.toLowerCase().includes(str) ||
        movie.nameEN.toLowerCase().includes(str);
      setIsLoading(false);
      setPreloderMessage(true);
      return isChecked
        ? filtredMovieInclud
        : movie.duration > 40 && filtredMovieInclud;
    });
  }, [filterString, isChecked, savedMovies, setIsLoading]);

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
