import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BurgerPopup from "../BurgerPopup/BurgerPopup";

function SavedMovies(props) {
  const {onBurgerPopup} = props;
  return (
    <section saved-movies>
     <Header onBurgerPopup={onBurgerPopup}/>
      <SearchForm />
      <MoviesCardList />
      <Footer />
      <BurgerPopup  />
    </section>
  )
}
export default SavedMovies;