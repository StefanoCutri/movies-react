import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Result } from "../interfaces/interfaces";
import { useMovieCast } from "../hooks/useMovieCast";
import { filterGenresById } from "../helpers/filterGenresById";
import "../styles/single-movie.css";

export const SingleMovieCard = () => {
  const moviesState = useLocation().state as Result;
  const { cast } = useMovieCast(moviesState.id);

  //   map the cast: "one, two and three"
  const newArray = cast.slice(0, 5);
  const castArray = [] as string[];

  newArray.forEach((c) => castArray.push(c.name));
  const lastC = castArray.pop();

  const castResult = castArray.join(", ") + " and " + lastC;

  // map the genres: 'one, two and three'
  const movieGenres = filterGenresById(moviesState.genre_ids);
  const n = [] as string[];

  movieGenres.forEach((g) => n.push(g.name));

  const last = n.pop();
  const genreResult = n.join(", ") + " and " + last;

  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {/* <div > */}
        <i onClick={() => navigate(-1)} className="fa-solid fa-arrow-left"></i>
      {/* </div> */}
      <div
        id="single-movie-container"
        style={{
          backgroundImage: `linear-gradient(
                    to top,
                    hsl(0 0% 0% / 0),
                    hsl(20 0% 0% / 0.3) 40%,
                    hsl(0 0% 0% / 1)
                ),url(https://image.tmdb.org/t/p/original/${moviesState.backdrop_path})`,
        }}
      >
        <div className="left-column">
          <div className="movie-title">
            <span id="original-title"> {moviesState.original_title}</span>
            <span className="release-date">
              ({moviesState.release_date.slice(0, 4)})
            </span>
          </div>

          <div className="overview">
            <p>{moviesState.overview}</p>
          </div>
        </div>

        <div className="right-column">
          <div>
            <span className="info-preview">Cast: </span>
            <span className="info-name">{castResult}</span>
          </div>

          <div
            style={{
              marginTop: "1.2rem",
            }}
          >
            <span className="info-preview">Genres: </span>
            <span className="info-name">{genreResult}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
