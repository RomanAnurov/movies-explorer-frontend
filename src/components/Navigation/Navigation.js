import React from "react";
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import LogoProfile from '../../images/profile.svg';
import './Navigation.css';


function Navigation(props) {
  const { isOpen, onClose } = props;
  return (
    <div className={`navigation  ${isOpen && "navigation_type_visible"}`}>
      <NavLink to="/" onClick={onClose} className={({isActive}) =>`navigation__link ${isActive ? "navigation__link_active" : ''}`} >Главная</NavLink>
      <NavLink to="/movies" onClick={onClose} className={({isActive}) =>`navigation__link ${isActive ? "navigation__link_active" : ''}`} >Фильмы</NavLink>
      <NavLink to="/saved-movies" onClick={onClose} className={({isActive}) =>`navigation__link ${isActive ? "navigation__link_active" : ''}`} >Сохранённы</NavLink>
      <NavLink to="/profile" onClick={onClose} className={({isActive}) =>`navigation__link ${isActive ? "navigation__link_active" : ''}`} ><img src={LogoProfile} alt="логотип" className="navigation__logo" /></NavLink>
    </div>

  );
}

export default Navigation;