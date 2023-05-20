import React from "react";
import "./Login.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <form className="register__form">
        <Logo />
        <h1 className="register__title">Рады видеть!</h1>
        <label className="register__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          id="email"
          type="email"
          value="pochta@yandex.ru"
          minLength={2}
          maxLength={30}
          placeholder="email"
          required
        />
        <span className="register__span"></span>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input"
          id="password"
          type="password"
          minLength={2}
          maxLength={30}
          placeholder="пароль"
          required
        />
        <span className="register__span register__span_active"></span>
        <button
          className="register__button register__button_type_login"
          type="submit"
        >
          Войти
        </button>

        <div className="register__signup">
          <p className="register__signup-text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="register__signup-link">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
