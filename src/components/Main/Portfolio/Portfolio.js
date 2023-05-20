import React from "react";
import "./Portfolio.css";
import portfolioIcon from "../../../images/strelka.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__links">
        <a
          href="https://romananurov.github.io/how-to-learn/index.html"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >Статичный сайт<img
            src={portfolioIcon}
            className="portfolio__icon"
            alt="иконка стрелка"
          />
        </a>
        <a
          href="https://romananurov.github.io/russian-travel/index.html"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >Адаптивный сайт<img
            src={portfolioIcon}
            className="portfolio__icon"
            alt="иконка стрелка"
          />
        </a>
        <a
          href="https://romananurov.github.io/mesto/index.html"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >Одностраничное приложение<img
            src={portfolioIcon}
            className="portfolio__icon"
            alt="иконка стрелка"
          />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
