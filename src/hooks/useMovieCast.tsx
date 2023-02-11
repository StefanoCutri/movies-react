import { useEffect, useState } from "react";
import { moviesApi } from "../api/moviesApi";
import { Cast, CastInterface } from "../interfaces/interfaces";

export const useMovieCast = (id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cast, setCast] = useState<Cast[]>([]);

  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const getNowPlaying = () => {
    const resp = moviesApi.get<CastInterface>(
      `/movie/${id}/credits?api_key=${api_key}&language=en-US`
    );

    resp
      .then((res) => {
        if (res.data !== undefined) {
          setCast(res.data.cast);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return {
    isLoading,
    cast,
  };
};
