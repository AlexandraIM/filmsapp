import fetchMovies from '../services/movie_service';

export const GET_MOVIES = "GET_MOVIES";
export const OPEN_EDIT = "OPEN_EDIT";
export const CLOSE_EDIT = "CLOSE_EDIT";
export const SAVE_FILM = "SAVE_FILM";

export function getMovies (d) {
  return {
    type: GET_MOVIES,
    data: d
  }
}

export function openEditModal(filmId){
  return {
    type: OPEN_EDIT,
    filmId: filmId
  }
}

export function closeEditModal(){
  return {
    type: CLOSE_EDIT
  }
}

export function saveFilm(film){
  return {
    type: SAVE_FILM,
    film: film
  }
}

export function fetchData() { 
  return dispatch => {
    return fetchMovies()
    .then(d => dispatch(getMovies(d.Search)))
  }
 }