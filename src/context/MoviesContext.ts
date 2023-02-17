import React from "react";
import {createContext} from 'react'
import { MoviesState, Result } from '../interfaces/interfaces';

export interface MoviesContextProps {
    moviesState: MoviesState;
    filtMovies: (filteredMoives: Result[]) => void;
}

export const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);