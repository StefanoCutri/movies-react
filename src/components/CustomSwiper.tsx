import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { Result } from "../interfaces/interfaces";

import { CustomModal } from "./CustomModal";

import "swiper/swiper.min.css";
import "../styles/custom-swiper.css";

interface Props {
  movie: Result[];
  type: string;
}
export const CustomSwiper = ({ movie, type }: Props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [movieModal, setMovieModal] = useState<Result>();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal-container">
      {
        movieModal &&
    <CustomModal open={open} handleClose={handleClose} modalMovie={movieModal}/>
      }
      <h1 className="movie-type">{type}</h1>
      <div className="swiper-container">
        <button className="swiper-btn" ref={prevRef}>
          <i className="fa-solid btn-arrow fa-chevron-left"></i>
        </button>
        <Swiper
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            // when window width is >= 640px
            320: {
              width: 320,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
            1440: {
              width: 1440,
              slidesPerView: 4,
            },
            1680: {
              width: 1680,
              slidesPerView: 5,
            },

          }}
        >
          {movie.map((p) => {
            return (
              <SwiperSlide>
                  <div key={p.id} className="swiper-img">
                      <img
                      onClick={()=>{
                        handleOpen()
                        setMovieModal(p)
                      }}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "10px",
                        }}
                        src={`https://image.tmdb.org/t/p/original/${p.backdrop_path}`}
                      />
              </div>
                </SwiperSlide>
            );
          })}
        </Swiper>
        <button ref={nextRef} className="swiper-btn">
          <i className="fa-solid btn-arrow fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};
