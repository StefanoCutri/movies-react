import { Genre } from "../interfaces/interfaces";

export const filterGenresById = (genreIds: number[]) => {
  const moviesGenres = localStorage.getItem("genresIds");
  if (moviesGenres !== null) {
    try {
      const list = JSON.parse(moviesGenres) as Genre[];
      return list.filter((x) => genreIds.includes(x.id));
    } catch {
      return [];
    }
  } else {
    return [];
  }
};
