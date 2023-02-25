import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { HeaderImage } from "./HeaderImage";
import { FilteredMovies } from "./FilteredMovies";
import { CustomSwiper } from "./CustomSwiper";

import { usePopular } from "../hooks/usePopular";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { useTopRated } from "../hooks/useTopRated";
import { useUpComing } from "../hooks/useUpComing";
import { useTrending } from "../hooks/useTrending";

import "../styles/movie-card.css";

export const Movies = () => {
  const { popular, isLoadingPopular } = usePopular();
  const { nowPlaying, isLoadingNowPlaying } = useNowPlaying();
  const { topRated, isLoadingTopRated } = useTopRated();
  const { upComing, isLoadingUpComing } = useUpComing();
  const { trending, isLoadingTrending } = useTrending();

  const filteredState = useContext(MoviesContext);
  const inputValue = filteredState.moviesState.searchInput;

  const getRandomNum = (maxLim: number) => {
    let rand = Math.random() * maxLim;
    rand = Math.floor(rand);
    return rand;
  };
  const randNumber = getRandomNum(popular.length);
  const randomMovie = popular[randNumber];

  return (
    <>
      {popular.length > 0 &&
      inputValue === "" &&
      filteredState.moviesState.filteredMovies.length === 0 ? (
        <HeaderImage movie={randomMovie} />
      ) : null}

      <FilteredMovies
        filteredState={filteredState}
        inputValue={inputValue}
        isLoading={isLoadingPopular}
      />

      <CustomSwiper movie={trending} type="Trending" />
      <CustomSwiper movie={popular} type="Popular" />
      <CustomSwiper movie={nowPlaying} type="Now playing" />
      <CustomSwiper movie={topRated} type="Top rated" />
      <CustomSwiper movie={upComing} type="Up coming" />
    </>
  );
};
