import React from "react";
import './Header.css';
import { Routes, Route, Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
function Header() {
  return (
    <Routes>
      <Route path="/" element={<header className="header">
        <img src={headerLogo} alt="логотип" className="header__logo" />
        <div className="header__links">
          <Link className="header__link" to="/sign-up">Регистрация</Link>
          <Link to="/sign-in"><button className="header__button">Войти</button></Link>
        </div>
      </header >} />
      <Route path="/movies" element={<header className="header header_type_movies">
        <img src={headerLogo} alt="логотип" className="header__logo" />
        {<Navigation />}
      </header >} />
    </Routes>
  );
}

export default Header;