import { useDebouncedValue } from "./useDebouncedValue";
import { useEffect, useState } from "react";
import { moviesApi } from "../api/moviesApi";
import { Result } from "../interfaces/interfaces";

export const useSearchByQuery = (inputValue: string) => {
  const debouncedValue = useDebouncedValue(inputValue);
  const [filteredMovies, setFilteredMovies] = useState<Result[]>([]);

  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const getFilteredMovie = () => {
    if (debouncedValue.length === 0 && inputValue.length === 0) {
      setFilteredMovies([]);
    }
    const resp = moviesApi.get(
      `/search/movie?api_key=${api_key}&=en-US&query=${inputValue}&page=1&include_adult=false`
    );
    if (debouncedValue.length === 0) {
      setFilteredMovies([]);
    }
    resp
      .then((res) => {
        setFilteredMovies(res.data.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    getFilteredMovie();
  }, [debouncedValue]);

  return {
    filteredMovies,
  };
};
