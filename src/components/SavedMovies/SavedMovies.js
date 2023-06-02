import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const {onBurgerPopup, isLoading, isLoggedIn} = props;
  return (
    <section className="saved-movies">
      <Header onBurgerPopup={onBurgerPopup} isLoggedIn={isLoggedIn}/>
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList />}
      <Footer />
      <BurgerPopup  />
    </section>
  )
}
export default SavedMovies;
