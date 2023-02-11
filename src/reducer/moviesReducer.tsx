import { MoviesState, Result } from "../interfaces/interfaces";

type filterAction = { type: "addFilteredMovies"; payload: Result[] };

export const moviesReducer = (
  state: MoviesState,
  action: filterAction
): MoviesState => {
  switch (action.type) {
    case "addFilteredMovies":
      return {
        filteredMovies: [...action.payload],
      };

    default:
      return state;
  }
};
