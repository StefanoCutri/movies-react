import { useEffect, useState } from "react";
import { moviesApi } from "../api/moviesApi";
import { NowPlaying, Result } from "../interfaces/interfaces";

export const useNowPlaying = () => {
  const [isLoadingNowPlaying, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Result[]>([]);

  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const getNowPlaying = () => {
    const resp = moviesApi.get<NowPlaying>(
      `/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    );
    resp
      .then((res) => {
        if (res.data !== undefined) {
          setNowPlaying(res.data.results);
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
    isLoadingNowPlaying,
    nowPlaying,
  };
};
