export interface UpComing {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}
export interface Popular {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}
export interface NowPlaying {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}
export interface TopRated {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}
export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
export interface MovieDetails {
    adult:                 boolean;
    backdrop_path:         string;
    genres:                Genre[];
    id:                    number;
    original_language:     string;
    original_title:        string;
    overview:              string;
    poster_path:           string;
    release_date:          string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
}
export interface MoviesContextInterface{
    movies: Result[] | []
}
export interface MoviesState{
    filteredMovies: Result[] | [];
    searchInput: string;
}
export interface CastInterface {
    id:   number;
    cast: Cast[];
    crew: Cast[];
}
export interface Cast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
}
export interface Genres {
    genres: Genre[];
}
export interface Genre {
    id:   number;
    name: string;
}








