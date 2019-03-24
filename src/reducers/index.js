import { GET_MOVIES, OPEN_EDIT, CLOSE_EDIT,SAVE_FILM} from '../actions/actions';

const initialState = {
  films:[],
  open:false,
  filmToEdit:{}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        films: action.data
      }
    case OPEN_EDIT:{
      return {
        ...state,
        open:true,
        filmToEdit: state.films.find(film => film.imdbID === action.filmId)
      }
    }
    case CLOSE_EDIT:{
      return {
        ...state,
        open:false
      }
    }
    case SAVE_FILM:{
      const films = [...state.films];
      const filmToUpdate = films.findIndex(f => f.imdbID === action.film.imdbID);
      films[filmToUpdate] = action.film;
      return {
        ...state,
        open:false,
        films:films
      }
    }
    default:
      return state;
  }
}

export default reducer