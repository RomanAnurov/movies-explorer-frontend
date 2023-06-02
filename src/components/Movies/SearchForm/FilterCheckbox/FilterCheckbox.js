import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isChecked, handleChange }) {
  return (
    <div className="filter">
      <label htmlFor="movie" className="filter__label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          
          id="movie"
          className="filter__checkbox-hidden"
        />
        <span className="filter__checkbox-visible"></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
