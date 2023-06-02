import React from "react";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

import "./Register.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Register({ handleSignUp, isServerErr }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, name } = values;
    handleSignUp(email, password, name);
  };

  return (
    <section className="register">
      <form
        className="register__form"
        onSubmit={handleSubmit}
        noValidate={true}
      >
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <label className="register__label" htmlFor="name">
          Имя
        </label>
        <input
          className="register__input"
          id="name"
          name="name"
          type="text"
          value={values["name"] || ""}
          onChange={handleChange}
          minLength={2}
          maxLength={30}
          placeholder="Имя"
          required={true}
        />
        <span
          className={
            !errors
              ? "register__span"
              : "register__span register__span_type_input"
          }
        >
          {errors.name}
        </span>
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
          required={true}
        />
        <span
          className={
            !errors
              ? "register__span"
              : "register__span register__span_type_input"
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
          required={true}
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
              : "register__span  register__span_type_registr"
          }
        >
          {isServerErr.text}
        </span>

        <button
          className={`register__button ${isValid && "register__button_active"}`}
          disabled={!isValid}
          type="submit"
        >
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
