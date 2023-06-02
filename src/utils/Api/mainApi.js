const BASE__URL = "https://api.anurovdiplom.nomoredomains.monster";

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const register = (email, password, name) => {
  return fetch(`${BASE__URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, email: email, password: password }),
  })
    .then(getResponse)
    .then((data) => {
      return data;
    });
};

export const login = (email, password) => {
  return fetch(`${BASE__URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email }),
  })
    .then(getResponse)
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      return data;
    });
};

export const getUserInfo = () => {
  return fetch(`${BASE__URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then(getResponse)
    .then((data) => {
      return data;
    });
};

export const userUpdate = (userData) => {
  return fetch(`${BASE__URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name: userData.name, email: userData.email }),
  })
    .then(getResponse)
    .then((data) => {
      return data;
    });
};

export const getSavedMovies = () => {
  return fetch(`${BASE__URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then(getResponse)
    .then((data) => {
      return data;
    });
};
export const addMovie = (movie) => {
  return fetch(`${BASE__URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(movie),
  })
    .then(getResponse)
    .then((data) => {
      return data;
    });
};

export const deleteMovie = (movieId) => {
  return fetch(`${BASE__URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then(getResponse)
    .then((data) => {
      return data;
    });
};
