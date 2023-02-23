import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { Result } from "../interfaces/interfaces";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

import "../styles/custom-swiper.css";
interface Props {
  movie: Result[];
  type: string;
}
export const CustomSwiper = ({ movie, type }: Props) => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <h1 className="movie-type">{type}</h1>
      <div className="swiper-container">
        <button className="swiper-btn" ref={prevRef}>
        <i className="fa-solid btn-arrow fa-chevron-left"></i>
        </button>
        <Swiper
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={5}
        >
          {movie.map((p) => {
            return (
              <div key={p.id}>
                <SwiperSlide>
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    src={`https://image.tmdb.org/t/p/original/${p.backdrop_path}`}
                  />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
          <button ref={nextRef} className='swiper-btn'>
          <i className="fa-solid btn-arrow fa-angle-right"></i>
          </button>
      </div>
    </>
  );
};
