import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "../Main/Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import * as mainApi from "../../utils/Api/mainApi";
import * as moviesApi from "../../utils/Api/moviesApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../Protect/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isServerErr, setIsServerErr] = useState({ text: "" });
  const [allMovies, setAllMovies] = useState([]);
  const [savedUserMovies, setSavedUserMovies] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser((userData) => ({
            ...userData,
            name: data.name,
            email: data.email,
            _id: data._id,
          }));
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(`Ошибка.....: ${err}`);

          userOut();
        });
    } else {
      userOut();
    }
  }, [isLoggedIn]);

  function handleBurgerPopupClick() {
    setIsBurgerPopupOpen(true);
  }

  function handleBurgerPopupClose() {
    setIsBurgerPopupOpen(false);
  }


  useEffect(() => {
    function loadAllMovies() {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((data) => {
          setAllMovies(data);
          
        })
        .catch(() => {
          setIsServerErr({
            text: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          });
        }).finally(() => {
           setIsLoading(false);
        })
  
      }
      if(isLoggedIn) {
        loadAllMovies();
      }
  },[isLoggedIn]
  )
  

  function handleSignUp(email, password, name) {
    mainApi
      .register(email, password, name)
      .then(() => {
        mainApi.login(email, password).then(() => {
          setIsLoggedIn(true);
          setIsServerErr({
            text: "",
          });
          navigate("/movies", { replace: true });
        });
      })
      .catch((err) => {
        if (err === 409) {
          setIsServerErr({
            text: "Пользователь с таким email уже существует.",
          });
        } else if (err === 400) {
          setIsServerErr({
            text: "При регистрации пользователя произошла ошибка.",
          });
        } else {
          setIsServerErr({
            text: "500 На сервере произошла ошибка.",
          });
        }
        setIsLoggedIn(false);
        setTimeout(() => setIsServerErr({}), 5000);
      });
  }

  function handleSignIn(email, password) {
    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          setIsServerErr({
            text: "",
          });
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err === 401) {
          setIsServerErr({
            text: "Вы ввели неправильный логин или пароль.",
          });
        } else if (err === 400) {
          setIsServerErr({
            text: "При авторизации произошла ошибка.",
          });
        } else {
          setIsServerErr({
            text: "500 На сервере произошла ошибка.",
          });
        }
        setIsLoggedIn(false);
        setTimeout(() => setIsServerErr({}), 5000);
      });
  }

  function handleUserUpdate(userData) {
    mainApi
      .userUpdate(userData)
      .then((data) => {
        setCurrentUser(data);
        setIsServerErr({
          text: "",
        });
      })
      .catch((err) => {
        if (err === 409) {
          setIsServerErr({
            text: "Пользователь с таким email уже существует.",
          });
        } else {
          setIsServerErr({
            text: "При обновлении профиля произошла ошибка.",
          });
        }
        setTimeout(() => setIsServerErr({}), 5000);
      });
  }

  function userOut() {
    localStorage.clear();
    setCurrentUser({});
    setIsLoggedIn(false);
    setIsServerErr({ text: "" });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Routes>
          <Route
            path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  isBurgerPopupOpen={isBurgerPopupOpen}
                  onBurgerPopup={handleBurgerPopupClick}
                  onClose={handleBurgerPopupClose}
                  isLoading={isLoading}
                  isLoggedIn={isLoggedIn}
                  allMovies={allMovies}
                  setIsLoading={setIsLoading}
                  
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies
                  isBurgerPopupOpen={isBurgerPopupOpen}
                  onBurgerPopup={handleBurgerPopupClick}
                  onClose={handleBurgerPopupClose}
                  isLoading={isLoading}
                  isLoggedIn={isLoggedIn}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  isBurgerPopupOpen={isBurgerPopupOpen}
                  onBurgerPopup={handleBurgerPopupClick}
                  onClose={handleBurgerPopupClose}
                  isLoggedIn={isLoggedIn}
                  userOut={userOut}
                  handleUserUpdate={handleUserUpdate}
                  isServerErr={isServerErr}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onBurgerPopup={handleBurgerPopupClick}
                onClose={handleBurgerPopupClose}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register handleSignUp={handleSignUp} isServerErr={isServerErr} />
            }
          />
          <Route
            path="/signin"
            element={
              <Login handleSignIn={handleSignIn} isServerErr={isServerErr} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <BurgerPopup
          isOpen={isBurgerPopupOpen}
          onClose={handleBurgerPopupClose}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
