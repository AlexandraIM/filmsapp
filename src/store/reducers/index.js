import * as actionTypes from '../actions/actionTypes';

const initialState = {
  films:[],
  filmToShow:{}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES:
      console.log(action.data)
      return {
        ...state,
        films: action.data
      }
    case actionTypes.SAVE_FILM:{
      const films = [...state.films];
      const filmToUpdate = films.findIndex(f => f.id === action.film.id);
      films[filmToUpdate] = action.film;
      return {
        ...state,
        films:films,
        filmToShow: action.film
      }
    }
    case actionTypes.GET_FILM: {
      return {
        ...state,
        filmToShow: state.films.find(film => film.id === action.filmId)
      }
    }
    default:
      return state;
  }
}

export default reducer