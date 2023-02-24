import { useEffect, useState } from "react";
import { moviesApi } from "../api/moviesApi";
import { Result, TopRated } from "../interfaces/interfaces";

export const useTrending = () => {
  const [isLoadingTrending, setIsLoading] = useState(true);
  const [trending, setTrending] = useState<Result[]>([]);

  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const getTopRated = () => {
    const resp = moviesApi.get<TopRated>(
      `/trending/all/day?api_key=${api_key}`
    );
    resp
      .then((res) => {
        if (res.data !== undefined) {
            setTrending(res.data.results);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    getTopRated();
  }, []);

  return {
    isLoadingTrending,
    trending,
  };
};
