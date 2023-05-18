import React from "react";
import "./Register.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <form className="register__form">
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <label className="register__label" htmlFor="name">
          Имя
        </label>
        <input
          className="register__input"
          id="name"
          type="text"
          minLength={2}
          maxLength={30}
          required
        />
        <span className="register__span"></span>
        <label className="register__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          id="email"
          type="email"
          value="pochta@yandex.ru"
        />
        <span className="register__span"></span>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input className="register__input" id="password" type="password" />
        <span className="register__span register__span_active ">
          Что-то пошло не так...
        </span>
        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>

        <div className="register__signup">
          <p className="register__signup-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__signup-link">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
