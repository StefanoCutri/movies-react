import { useEffect, useState } from "react";
import { moviesApi } from "../api/moviesApi";
import { Result, TopRated } from "../interfaces/interfaces";

export const useTopRated = () => {
  const [isLoadingTopRated, setIsLoading] = useState(true);
  const [topRated, setTopRated] = useState<Result[]>([]);

  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const getTopRated = () => {
    const resp = moviesApi.get<TopRated>(
      `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
    );
    resp
      .then((res) => {
        if (res.data !== undefined) {
          setTopRated(res.data.results);
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
    isLoadingTopRated,
    topRated,
  };
};
