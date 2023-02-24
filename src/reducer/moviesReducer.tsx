import { MoviesState, Result } from "../interfaces/interfaces";

type filterAction =  
 | {type: "addFilteredMovies", payload: Result[]}
 | {type: "updateSearchInput", payload: string}; 
 

export const moviesReducer = (
  state: MoviesState,
  action: filterAction
): MoviesState => {
  switch (action.type) {
    case "addFilteredMovies":
      return {
        ...state,
        filteredMovies: [...action.payload]
      };
      
    case "updateSearchInput":
      // console.log("updated callled", action.payload)
      return{
        ...state,
        searchInput: action.payload
      }

    default:
      return state;
  }
};
