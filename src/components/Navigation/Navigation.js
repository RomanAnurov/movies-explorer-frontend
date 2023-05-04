import React from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';
import LogoProfile from '../../images/profile.svg';
import './Navigation.css';


function Navigation() {
  return (
    <><div className="nav-links">
      <Link className="nav-link" to="/movies">Фильмы</Link>
      <Link className="nav-link" to="/saved-movies">Сохранённые фильмы</Link>
      <Link className="nav-link" to="/profile"><img src={LogoProfile} alt="логотип" className="logoprofile" /></Link>
    </div></>

  );
}

export default Navigation;