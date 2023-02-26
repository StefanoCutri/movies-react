import React, { useEffect, useState, useContext, useRef } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { moviesApi } from "../api/moviesApi";
import { Result } from "../interfaces/interfaces";

import "../styles/navbar.css";

export const SearchInput = ({ navRef }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Result[]>([]);
  const { filtMovies, updateSearchInput } = useContext(MoviesContext);
  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const inputRef = useRef("");
  const getFilteredMovie = () => {
    if (inputValue.length === 0) {
      filtMovies([]);
      return;
    }
    const resp = moviesApi.get(
      `/search/movie?api_key=${api_key}&=en-US&query=${inputValue}&page=1&include_adult=false`
    );
    resp
      .then((res) => {
        filtMovies(res.data.results);
        setFilteredMovies(res.data.results);
      })
      .catch((err) => {
        throw new Error(err);
      });

    return filteredMovies;
  };

  const updateInput = () => {
    if (inputValue.length === 0) {
      updateSearchInput(inputRef.current);
    }
    updateSearchInput(inputRef.current);
  };
  useEffect(() => {
    inputRef.current = inputValue;
    getFilteredMovie();
    updateInput();
  }, [inputValue]);

  return (
    <div className="search-bar" ref={navRef}>
      <input
        className="input"
        placeholder="Search movies"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
        {
          inputValue.length > 0 
          &&
          <span
          className="remove-input"
          onClick={() => setInputValue('')} 
          >X</span>
        }
    </div>
  );
};
