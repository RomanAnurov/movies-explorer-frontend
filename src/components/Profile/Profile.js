import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import BurgerPopup from "../BurgerPopup/BurgerPopup";

function Profile(props) {

  const {onBurgerPopup, isOpen} = props;
  return (
    <section className="profile">
      <Header onBurgerPopup={onBurgerPopup}/>
      <div className="profile__container">
        <h1 className="profile__title">Привет, Роман!</h1>
        <form className="profile__form">
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input className="profile__input" id="name" type="text" value="Роман" />
          </div>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input className="profile__input" id="email" type="email" value="pochta@yandex.ru" />
          </div>
          <button className="profile__edit" >Редактировать</button>
          <Link className="profile__out" to="/signin">Выйти из аккаунта</Link>
        </form>
      </div>
      <BurgerPopup isOpen={isOpen} />
    </section>

  )
}

export default Profile;