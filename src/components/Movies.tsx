import React, { useRef } from "react";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MovieCard } from "./MovieCard";
import { HeaderImage } from "./HeaderImage";

import { usePopular } from "../hooks/usePopular";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { useTopRated } from "../hooks/useTopRated";
import { useUpComing } from "../hooks/useUpComing";

import "../styles/movie-card.css";

export const Movies = () => {
  const { popular, isLoadingPopular } = usePopular();
  const { nowPlaying, isLoadingNowPlaying } = useNowPlaying();
  const { topRated, isLoadingTopRated } = useTopRated();
  const { upComing, isLoadingUpComing } = useUpComing();

  const filteredState = useContext(MoviesContext);

const getRandomNum = (maxLim: number) => {
  let rand = Math.random () * maxLim;

  rand = Math.floor(rand);

  return rand;
}

const randNumber = getRandomNum(popular.length);

const randomMovie = popular[randNumber];
console.log(filteredState.moviesState.filteredMovies.length)
  return (
    <>
    {
      popular.length > 0 
      ?
      <HeaderImage movie={randomMovie} />
      : null
    }
        
    
      <div className="movies-container"
      style={{
        marginTop: filteredState.moviesState.filteredMovies.length === 0 ? '0px !important ':'1.8rem ' 
      }}
      >
        {filteredState.moviesState.filteredMovies.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingTopRated,
              }}
              key={p.id}
            />
          );
        })}
      </div>
      
      <p className="movie-type">Popular</p>
      <div className="movies-container">
        {popular.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingPopular,
              }}
              key={p.id}
            />
          );
        })}
      </div>

      <p className="movie-type">Top rated</p>
      <div className="movies-container">
        {topRated.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingTopRated,
              }}
              key={p.id}
            />
          );
        })}
      </div>

      <p className="movie-type">Now playing</p>
      <div className="movies-container">
        {nowPlaying.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingNowPlaying,
              }}
              key={p.id}
            />
          );
        })}
      </div>

      <p className="movie-type">Up coming</p>
      <div className="movies-container">
        {upComing.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingUpComing,
              }}
              key={p.id}
            />
          );
        })}
      </div>
    </>
  );
};
