import React, { useContext, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";
import { Result } from "../interfaces/interfaces";
import "../styles/header.css";

export const HeaderImage = React.memo(({ movie }: any) => {
  const randomMovie = movie as Result;
  const movieRef = useRef(randomMovie);
  const filteredState = useContext(MoviesContext);
  const truncate = (input: string) => input.length > 120 ? `${input.substring(0, 120)}...` : input;
  if (filteredState.moviesState.filteredMovies.length > 0) {
    return null

  }else{
  return (
    <>

      <div
        className="header"
        style={{
          backgroundImage: `linear-gradient(
            to top,
                    hsl(0 0% 0% / 0),
                    hsl(20 0% 0% / 0.3) 50%,
                    hsl(0 0% 0% / 1)
                ),url(https://image.tmdb.org/t/p/original/${movieRef.current.backdrop_path})`,
        }}
      >
        <div className="header-content">
          <div className="header-content-layout animate__fadeInLeft">
            <h1>{movieRef.current.original_title}</h1>
            <Link to={`/movie/${movieRef.current.id}`} state={movieRef.current} style={{
              textDecoration: 'none'
            }}>
            <button>
              <i className="fa-solid fa-circle-info"></i>
              <p>More info</p>
            </button>
            </Link>
            <p id="overview">{truncate(movieRef.current.overview)}</p>
          </div>
        </div>
      </div>

      <div
        className="bottom-shadow"
        style={{
          background: `linear-gradient(
          to bottom,
                  hsl(0 0% 0% / 0),
                  hsl(20 0% 0% / 0.5) 40%,
                  hsl(0 0% 0% / 1)
              )`,
        }}
      ></div>
    </>
  );
}
});
