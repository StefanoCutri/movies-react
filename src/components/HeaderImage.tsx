import React from 'react';
import { Result } from '../interfaces/interfaces';
import "../styles/header.css"

export const HeaderImage = ({movie}: any) => {

  const randomMovie = movie as Result;
  const truncate = (input: string) => input.length > 120 ? `${input.substring(0, 120)}...` : input;
  return(
  <>
       
           <div
        className="header"
        style={{
          backgroundImage: `linear-gradient(
            to top,
                    hsl(0 0% 0% / 0),
                    hsl(20 0% 0% / 0.3) 50%,
                    hsl(0 0% 0% / 1)
                ),url(https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path})`,
                height: '70vh'
        }}
      >
      <div className="header-content">
        <div className="header-content-layout">
        <h1>{randomMovie.original_title}</h1>
        <button>
        <i className="fa-solid fa-circle-info"></i>
         <p>More info</p>
        </button>
        <p id='overview'>{truncate(randomMovie.overview)}</p>
        </div>
      </div>
      </div>


<div 
      className="bottom-shadow"
      style={{
        background: `linear-gradient(
          to bottom,
                  hsl(0 0% 0% / 0),
                  hsl(20 0% 0% / 0.5) 40%,
                  hsl(0 0% 0% / 1)
              )`,
      }}
      >

  </div>
  </>
  )
}

