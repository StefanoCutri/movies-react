import { useEffect } from "react";
import { Genres } from "../interfaces/interfaces";
import { moviesApi } from "../api/moviesApi";

export const useGenresLocalStorage = () => {
  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const getGenres = () => {
    const resp = moviesApi.get<Genres>(
      `genre/movie/list?api_key=${api_key}&language=en-US`
    );

    resp
      .then((res) => {
        if (res.data !== undefined) {
          localStorage.setItem("genresIds", JSON.stringify(res.data.genres));
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    getGenres();
  }, []);
};
