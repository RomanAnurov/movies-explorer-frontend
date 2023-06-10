import { MOVIES__URL } from "../constants";

export const getMovies = () => {
  return fetch(`${MOVIES__URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};
