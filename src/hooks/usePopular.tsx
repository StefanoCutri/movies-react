import { useEffect, useState } from "react";
import { moviesApi } from "../api/moviesApi";
import { Popular, Result } from "../interfaces/interfaces";

export const usePopular = () => {
  const [isLoadingPopular, setIsLoading] = useState(true);
  const [popular, setPopular] = useState<Result[]>([]);

  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const getPopular = () => {
    const resp = moviesApi.get<Popular>(
      `/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    resp
      .then((res) => {
        if (res.data !== undefined) {
          setPopular(res.data.results);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    getPopular();
  }, []);

  return {
    isLoadingPopular,
    popular,
  };
};
