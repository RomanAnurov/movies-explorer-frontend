import React from "react";
import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import BurgerPopup from "../BurgerPopup/BurgerPopup";


function App() {
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const[isLoading, setIsLoading] = useState(false);

  function handleBurgerPopupClick() {
    setIsBurgerPopupOpen(true);
  }

  function handleBurgerPopupClose() {
    setIsBurgerPopupOpen(false);
  }

  return (
    <div className="page__content">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              isBurgerPopupOpen={isBurgerPopupOpen}
              onBurgerPopup={handleBurgerPopupClick}
              onClose={handleBurgerPopupClose}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              isBurgerPopupOpen={isBurgerPopupOpen}
              onBurgerPopup={handleBurgerPopupClick}
              onClose={handleBurgerPopupClose}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              isBurgerPopupOpen={isBurgerPopupOpen}
              onBurgerPopup={handleBurgerPopupClick}
              onClose={handleBurgerPopupClose}
            />
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <BurgerPopup isOpen={isBurgerPopupOpen} onClose={handleBurgerPopupClose}/>
      
    </div>
  );
}

export default App;
