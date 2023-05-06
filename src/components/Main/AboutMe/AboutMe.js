import React from "react";
import "./AboutMe.css";
import avatarPhoto from "../../../images/avatar.png";
function AboutMe() {
  return (
    <section className="aboutme">
      <h3 className="section-title">Студент</h3>
      <img
        src={avatarPhoto}
        alt="фотография автора проекта"
        className="aboutme__photo"
      />
      <h2 className="aboutme__title">Роман</h2>
      <p className="aboutme__subtitle">Фронтенд-разработчик, 39 лет</p>
      <p className="aboutme__discription">
        Занимался продажами с одностраничных сайтов на заре индустрии и делал их
        на конструкторах, а потом решил начать кодить по настоящему и пришёл
        учиться в Яндекс-Практикум. После окончания курса намереваюсь начать
        работать в направлении разработки. Женат, трое детей и собака. Хобби
        гитара, спорт и рыбалка.
      </p>
      <a
        className="aboutme__link"
        href="https://github.com/RomanAnurov?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </section>
  );
}

export default AboutMe;
