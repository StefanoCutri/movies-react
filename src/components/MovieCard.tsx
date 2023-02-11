import { Link } from "react-router-dom";
import { Result } from "../interfaces/interfaces";
import "../styles/movie-card.css";

interface MovieCardProps {
  movieInfo: {
    movie: Result;
    isLoading: boolean;
  };
}

export const MovieCard = ({ movieInfo }: MovieCardProps) => {
  const { movie, isLoading } = movieInfo;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {movie.poster_path && (
        <Link to={`/movie/${movie.id}`} state={movie}>
          <div
            className="movie-content"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
            }}
          ></div>
        </Link>
      )}
    </>
  );
};
