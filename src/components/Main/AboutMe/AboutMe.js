import React from "react";
import "./AboutMe.css";
import avatarPhoto from "../../../images/avatar.png";
function AboutMe() {
  return (
    <section className="aboutme">
      <h3 className="section-title">Студент</h3>
      <div className="aboutme__container">
        <div className="aboutme__container-text">
          <h2 className="aboutme__title">Роман</h2>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 39 лет</p>
          <p className="aboutme__discription">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="aboutme__link"
            href="https://github.com/RomanAnurov?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          src={avatarPhoto}
          alt="фотография автора проекта"
          className="aboutme__photo"
        />
      </div>
    </section>
  );
}

export default AboutMe;
