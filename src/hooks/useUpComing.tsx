import { useEffect, useState } from "react";
import { moviesApi } from "../api/moviesApi";
import { Result, UpComing } from "../interfaces/interfaces";

export const useUpComing = () => {
  const [isLoadingUpComing, setIsLoading] = useState(true);
  const [upComing, setUpComing] = useState<Result[]>([]);

  const api_key = "913e10c847c55fbb2045a16908b5870b";

  const getUpComing = () => {
    const resp = moviesApi.get<UpComing>(
      `/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
    );
    resp
      .then((res) => {
        if (res.data !== undefined) {
          setUpComing(res.data.results);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(() => {
    getUpComing();
  }, []);
  return {
    isLoadingUpComing,
    upComing,
  };
};
