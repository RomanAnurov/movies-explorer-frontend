import React from "react";
import "./BurgerPopup.css";
import Navigation from "../Navigation/Navigation";
import closePopup from '../../images/button-closemenu.svg'

function BurgerPopup(props) {
 const {isOpen, onClose} = props;
   
  return (
    <section className={`popup  ${
      isOpen ? "popup_type_opened" : ""
    }`}
  >
      <div className="popup__container">
      <button
          className="popup__close"
          onClick={onClose}
          type="button"
        ><img src={closePopup} className="popup__close-icon" alt="иконка закрытия попапа" /></button>
      <Navigation onClose={onClose} isOpen={isOpen}/>
      </div>
    </section>
  )
}

export default BurgerPopup;