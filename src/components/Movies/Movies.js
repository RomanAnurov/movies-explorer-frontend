import React from "react";

import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import Preloader from "../Preloder/Preloader";


function Movies(props) {
  const { onBurgerPopup, isLoading } = props;
 
  


  return (
    <section className="movies">
      <Header onBurgerPopup={onBurgerPopup} />
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList />}
      <Footer />
      <BurgerPopup  />
    </section>
  );
}

export default Movies;
