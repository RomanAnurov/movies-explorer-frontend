import React from "react";
import "./Logo.css";
import headerLogo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (  <Link to="/"><img src={headerLogo} alt="логотип" className="logo" /></Link>

  )
}

export default Logo;