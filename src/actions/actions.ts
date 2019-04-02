import {fetchMovies, updateMovie} from '../services/movie_service';

export const GET_MOVIES = "GET_MOVIES";
export const SAVE_FILM = "SAVE_FILM";
export const GET_FILM = "GET_FILM"

export function getMovies (d) {
  return {
    type: GET_MOVIES,
    data: d
  }
}

export function getFilm(id){
  console.log(id);
  
  return {
    type: GET_FILM,
    filmId: id
  }
}


export function saveFilm(film){
  return {
    type: SAVE_FILM,
    film: film
  }
}

export function saveToDb(film) {
  return dispatch => {
    return updateMovie(film)
    .then(d => dispatch(saveFilm(film)))

  }
}

export function fetchData() { 
  return dispatch => {
    return fetchMovies()
    .then(d => dispatch(getMovies(d)))
  }
 }