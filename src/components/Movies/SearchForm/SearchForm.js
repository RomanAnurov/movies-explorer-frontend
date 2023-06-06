import React from "react";
import { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const {
    moviesSearch,
    setMoviesSearch,
    isChecked,
    setIsChecked,
    handleSearchMovies,
    
  } = props;

  const [isInputError, setIsInputError] = useState("");

  const showError = (data) => {
    if (data === "") {
      setIsInputError("Нужно ввести ключевое слово");
    } else {
      setIsInputError("");
    }
  };

  const handleChange = (e) => {
    showError(e.target.value);
    setMoviesSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!moviesSearch) {
      return 
    }
    e.preventDefault();
    handleSearchMovies(isChecked);
  };

  const handleCheckbox = () => {
    
    if (!moviesSearch) {
      setIsInputError("Нужно ввести ключевое слово");
     
    } else {
     
      handleSearchMovies(!isChecked);

      setIsChecked(!isChecked);
    }
  
  };

  return (
    <section className="searchform">
      <form
        className="searchform__form"
        onSubmit={handleSubmit}
        noValidate={true}
      >
        <fieldset className="searchform__container">
          <input
            onChange={handleChange}
            className={`searchform__input ${
              isInputError ? "searchform__input_error" : ""
            }`}
            type="text"
            placeholder="Фильм"
            value={moviesSearch}
            required
          />
          <button
            className={`searchform__button ${
              moviesSearch && "searchform__button_active"
            }`}
            disabled={!moviesSearch}
            type="submit"
          >
            Поиск
          </button>
        </fieldset>
        <span
          className={
            !isInputError
              ? "searchform__span"
              : "searchform__span searchform_span_active"
          }
        >
          {isInputError}
        </span>
        <FilterCheckbox isChecked={isChecked} handleChange={handleCheckbox} />
      </form>
    </section>
  );
}

export default SearchForm;
