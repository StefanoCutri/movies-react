import React from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MoviesState, Result } from "../interfaces/interfaces";
import { useReducer } from "react";
import { moviesReducer } from "../reducer/moviesReducer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MoviesProvider = ({ children }: Props) => {
  const movies_state: MoviesState = {
    filteredMovies: [],
    searchInput: ''
  };
  const [moviesState, dispatch] = useReducer(moviesReducer, movies_state);

  const filtMovies = (filteredMoives: Result[]) => {
    dispatch({ type: "addFilteredMovies", payload: filteredMoives });
  };

  const updateSearchInput = (input: string) =>{
    console.log(input)
    dispatch({type: 'updateSearchInput', payload: input});
  }
  return (
    <MoviesContext.Provider
      value={{
        moviesState,
        filtMovies,
        updateSearchInput
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
