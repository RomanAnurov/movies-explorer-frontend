import React, { useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

import { useFormWithValidation } from "../../utils/useFormWithValidation";

function Profile(props) {
  const {
    userOut,
    handleUserUpdate,
    onBurgerPopup,
    isOpen,
    isLoggedIn,
    isServerErr,
  } = props;

  const currentUser = useContext(CurrentUserContext);

  const { values, setValues, handleChange, errors, isValid } =
    useFormWithValidation();

  // Отображени данных текущего пользователя в полях формы

  useEffect(() => {
    return setValues({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = values;

    handleUserUpdate({ name, email });
  };
  return (
    <section className="profile">
      <Header onBurgerPopup={onBurgerPopup} isLoggedIn={isLoggedIn} />
      <div className="profile__container">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form
          className="profile__form"
          onSubmit={handleSubmit}
          noValidate={true}
        >
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__input"
              id="name"
              type="text"
              name="name"
              minLength={2}
              maxLength={30}
              required={true}
              value={values["name"] || ""}
              onChange={handleChange}
            />
          </div>
          <span
            className={
              errors ? "register__span register__span_active" : "register__span"
            }
          >
            {errors.name}
          </span>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>
            <input
              className="profile__input"
              id="email"
              type="email"
              name="email"
              value={values["email"] || ""}
              onChange={handleChange}
              required={true}
            />
          </div>
          <span
            className={
              errors ? "register__span register__span_active" : "register__span"
            }
          >
            {errors.email}
          </span>

          <span
            className={
              !isServerErr
                ? "register__span"
                : "register__span  register__span_type_profile"
            }
          >
            {isServerErr.text}
          </span>

          <button
            className={`profile__edit ${isValid && "profile__edit_active"}`}
            disabled={!isValid}
            type="submit"
          >
            Редактировать
          </button>
          <Link className="profile__out" to="/signin" onClick={userOut}>
            Выйти из аккаунта
          </Link>
        </form>
      </div>
      <BurgerPopup isOpen={isOpen} />
    </section>
  );
}

export default Profile;
