import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import burgerIcon from "../../images/button-burger.svg"

function Header(props) {
const {onBurgerPopup, isOpen, onClose} = props;
  
  const isAuth = localStorage.getItem('jwt');
 
  return (
    !isAuth ? (<header className="header">
      <Logo />
      <div className="header__links">
        <Link className="header__link" to="/signup">Регистрация</Link>
        <Link to="/signin"><button className="header__button">Войти</button></Link>
      </div>
    </header >) : (<header className="header header_type_movies">
     <Logo />
      {<Navigation isOpen={isOpen} onClose={onClose} />}
      <button className="header__burger" onClick={onBurgerPopup}type="button"><img src={burgerIcon} className="header__burger-icon" alt="иконка бургер меню" /></button>
    </header >)

  );
}

export default Header;