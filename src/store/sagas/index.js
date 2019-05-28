import {takeEvery,put} from 'redux-saga/effects';

import {fetchMovies, updateMovie} from '../../services/movie_service';
import {saveFilm, getMovies} from '../actions/actions';
import * as actionTypes from '../actions/actionTypes';

function* saveToDBSaga(action){
  yield updateMovie(action.film);
  yield saveFilm(action.film);
}

function* fetchFilmsSaga(action){
    try{
      const result = yield fetchMovies();
      yield put(getMovies(result));
    } catch (error) {
      console.error(error)
    }
  
}

export function* moviesSaga(){
  yield takeEvery(actionTypes.SAVE_TO_DB,saveToDBSaga);
  yield takeEvery(actionTypes.FETCH_MOVIES,fetchFilmsSaga)
}
