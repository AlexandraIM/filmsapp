
import * as actionTypes from './actionTypes';

export function getMovies (d) {
  return {
    type: actionTypes.GET_MOVIES,
    data: d
  }
}

export function getFilm(id){
  return {
    type: actionTypes.GET_FILM,
    filmId: id
  }
}

export function saveFilm(film){
  return {
    type: actionTypes.SAVE_FILM,
    film: film
  }
}

export function saveToDb(film) {
  return {
    type: actionTypes.SAVE_TO_DB,
    film: film
  }
}

export function fetchData() { 
  return {
    type: actionTypes.FETCH_MOVIES
  }
 }