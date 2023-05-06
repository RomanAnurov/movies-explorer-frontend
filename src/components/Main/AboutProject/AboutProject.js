import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutproject" id="about-project">
      <h3 className="section-title">О проекте</h3>
      <ul className="table">
        <li className="table__cell">
          <h4 className="table__heading">Дипломный проект включал 5 этапов</h4>
          <p className="table__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>

        <li className="table__cell">
          <h4 className="table__heading">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="table__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="graffic">
        <p className="graffic__text">1 неделя</p>
        <p className="graffic__text">4 недели</p>
        <p className="graffic__text">Back-end</p>
        <p className="graffic__text">Front-end</p>
      </div>
    </section>
  );
}
export default AboutProject;
