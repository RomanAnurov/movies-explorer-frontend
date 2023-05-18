import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="page-error">
      <h1 className="page-error__title">404</h1>
      <p className="page-error__subtitle">Страница не найдена</p>

      <Link to="/" className="page-error__link">
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
