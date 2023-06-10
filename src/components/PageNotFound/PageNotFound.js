import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";


function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className="page-error">
      <h1 className="page-error__title">404</h1>
      <p className="page-error__subtitle">Страница не найдена</p>

      <button className="page-error__link" onClick={() => navigate(-1,{replace: true})}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
