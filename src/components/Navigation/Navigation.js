import React from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';
import LogoProfile from '../../images/profile.svg';
import './Navigation.css';


function Navigation() {
  return (
    <><div className="navigation">
      <Link className="navigation__link" to="/movies">Фильмы</Link>
      <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
      <Link className="navigation__link" to="/profile"><img src={LogoProfile} alt="логотип" className="navigation__logo" /></Link>
    </div></>

  );
}

export default Navigation;