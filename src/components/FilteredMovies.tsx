import React, { useEffect, useRef } from 'react'
import { MoviesContextProps } from '../context/MoviesContext';
import { MovieCard } from './MovieCard';

interface Props{
inputValue: string;
filteredState: MoviesContextProps;
isLoading: boolean
};


export const FilteredMovies = ({inputValue, filteredState, isLoading}: Props) => {
    
    useEffect(() => {
    if (inputValue.length > 0) {
      window.scrollTo(0, 0)
    }
    }, [inputValue])
if (inputValue.length === 0) {
    return null;
}
  return (
    <div id="filtered-movies">
    <p className="movie-type" style={{
        marginTop: '2rem'
    }}>
    Results for: {inputValue}
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
  )
}
