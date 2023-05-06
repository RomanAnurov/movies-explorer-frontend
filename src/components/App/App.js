import React from "react";
import "./App.css";
import Header from '../Header/Header';
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page__content">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
