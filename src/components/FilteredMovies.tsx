import React, { useEffect } from "react";
import { MoviesContextProps } from "../context/MoviesContext";
import { MovieCard } from "./MovieCard";
import "../styles/filteredMovies.css";

interface Props {
  inputValue: string;
  filteredState: MoviesContextProps;
  isLoading: boolean;
}
export const FilteredMovies = ({inputValue,filteredState,isLoading,}: Props) => {
  useEffect(() => {
    if (inputValue !== "") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [inputValue]);

  if (inputValue.length === 0) {
    return null;
  }
  return (
    <div id="filtered-movies">
      <p
        className="results"
      >
        {inputValue.length > 0 &&
        filteredState.moviesState.filteredMovies.length === 0 ? (
          <span className="filt-results">No results for "{inputValue}"</span>
        ) : (
          <span className="filt-results">Results for "{inputValue}"</span>
        )}
      </p>
      <div
        className="movies-container"
        style={{
          marginTop:
            filteredState.moviesState.filteredMovies.length === 0
              ? "0px !important "
              : "1.8rem ",
        }}
      >
        {filteredState.moviesState.filteredMovies.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading,
              }}
              key={p.id}
            />
          );
        })}
      </div>
    </div>
  );
};
