import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Result } from "../interfaces/interfaces";
import ReactModal from "react-modal";

import "../styles/modal.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useMovieCast } from "../hooks/useMovieCast";
import { filterGenresById } from "../helpers/filterGenresById";

interface Props {
  movie?: Result;
  handleClose: () => void;
  open: boolean;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const truncate = (input: string) => input.length > 120 ? `${input.substring(0, 120)}...` : input;

export const CustomModal = ({ handleClose, open, movie }: Props) => {
  if (movie === undefined) {
    return <></>;

  }
  
  const imageRef = useRef('');
  const { cast } = useMovieCast(movie.id);
  
  //   map the cast: "one, two and three"
  const newArray = cast.slice(0, 5);
  const castArray = [] as string[];
  
  newArray.forEach((c) => castArray.push(c.name));
  const lastC = castArray.pop();
  
  const castResult = castArray.join(", ") + " and " + lastC;
  
  // map the genres: 'one, two and three'
  const movieGenres = filterGenresById(movie.genre_ids);
  const n = [] as string[];
  
  movieGenres.forEach((g) => n.push(g.name));

  let last = n.pop();
  let genreResult;
  if (movieGenres.length > 1) {
    genreResult = n.join(", ") + " and " + last;
  }else{
    genreResult = last;
  }
  
  useEffect(() => {
    imageRef.current = movie.backdrop_path;
    if (open) {
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'unset';
    }
  }, [movie.backdrop_path, open])
  
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={handleClose}
      style={customStyles}
      closeTimeoutMS={500}
      className="modal"
      overlayClassName="modal-fondo"
      ariaHideApp={false}
    >
      <div className="modal-size">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            style={{
              height: "100%",
              width: "100%",
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px'
            }}
          />
          <div className="column-wrapper">
        <div className="modal-left-column">
          <div className="modal-title">
            <span id="modal-original-title"> 
            {
            movie.original_title
            ?
            movie.original_title
            :
            <span>-</span>
            }
            </span>
            <span className="modal-release-date">
              {
                movie.release_date
                &&
               (movie.release_date.slice(0, 4))
              }
            </span>
          </div>

          <div className="modal-overview">
            <p>{truncate(movie.overview)}</p>
          </div>
        </div>

        <div className="modal-right-column">
          <div  style={{
            padding: '0 5px',
            marginBottom: '1rem'
          }}>
            <span className="modal-info-preview">Cast: </span>
            <span className="modal-info-name">{castResult}</span>
          </div>

          <div style={{
            padding: '0 5px'
          }}
          >
            <span className="modal-info-preview">Genres: </span>
            <span className="modal-info-name">
            {
            genreResult
            ?
            genreResult
            :
            <span>-</span>
            }
              </span>
          </div>
        </div >
          </div>
        </div>
    </ReactModal>
   
  );
};
