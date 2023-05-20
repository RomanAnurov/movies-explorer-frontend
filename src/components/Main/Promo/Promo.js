import React from "react";
import './Promo.css';
import promoImage from '../../../images/Planet-optimum.svg';


function Promo() {
return (
  <section className="promo">
    <img src={promoImage} className="promo__main-illustration" alt="земной шар"  />
    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
    <button className="promo__button"><a className="promo__button-text" href="#about-project">Узнать больше</a></button>
    
  </section>
)

}
export default Promo;