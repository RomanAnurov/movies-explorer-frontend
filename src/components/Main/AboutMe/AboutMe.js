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
            Живу в г.Старый Оскол. На заре индустрии занимался интернет
            продажами с одностраничных сайтов. Тогда и сделал сой первый лендинг
            на конструкторе. Потом даже делал на заказ под ключ с дизайном. Но
            спустя время завершил с продажами и решил научиться Web-разработке
            по настоящему. Уметь писать код и разбираться в этом. Отучился в
            Яндекс-Практикуме. Есть жена 3 детей и собака. Люблю природу, ираю
            на гитаре, рыбалка и спорт тоже присутствует в моей жизни.
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
