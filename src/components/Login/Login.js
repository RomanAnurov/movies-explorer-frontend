import React from "react";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import "./Login.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Login({ handleSignIn, isServerErr }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    handleSignIn(email, password);
  };
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  return (
    <section className="login">
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <Logo />
        <h1 className="register__title">Рады видеть!</h1>
        <label className="register__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          id="email"
          name="email"
          type="email"
          value={values["email"] || ""}
          onChange={handleChange}
          placeholder="email"
          required
        />
        <span
          className={
            !errors
              ? "register__span"
              : "register__span  register__span_type_input"
          }
        >
          {errors.email}
        </span>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input"
          id="password"
          name="password"
          type="password"
          value={values["password"] || ""}
          onChange={handleChange}
          placeholder="пароль"
          required
        />
        <span
          className={
            !errors
              ? "register__span"
              : "register__span register__span_type_input"
          }
        >
          {errors.password}
        </span>
        <span
            className={
              !isServerErr
                ? "register__span"
                : "register__span  register__span_type_login"
            }
          >
            {isServerErr.text}
          </span>
          
        <button
          className={`register__button register__button_type_login ${
            isValid && "register__button_active"
          }`}
          disabled={!isValid}
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
