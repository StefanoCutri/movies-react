import React, { useRef } from "react";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MovieCard } from "./MovieCard";
import { usePopular } from "../hooks/usePopular";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { useTopRated } from "../hooks/useTopRated";
import { useUpComing } from "../hooks/useUpComing";

import "../styles/movie-card.css";
import { HeaderImage } from "./HeaderImage";

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

  return (
    <>
  {/* Hacer un componente con React.MEMO */}
  {
    popular.length > 0 
    ?
<HeaderImage movie={randomMovie} />
: null
  }
      
    
      <div className="movies-container">
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
