import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return(
    <section className="searchform">
      <form className="searchform__form">
        <fieldset className="searchform__container">
        <input className="searchform__input" type="text" placeholder="Фильм" required/>
        <button className="searchform__button" type="submit">Поиск</button>
        </fieldset>
        <FilterCheckbox />
      </form>
    </section> 
  )
}

export default SearchForm;