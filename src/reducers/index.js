import { GET_MOVIES,GET_FILM,SAVE_FILM} from '../actions/actions';


const initialState = {
  films:[],
  filmToShow:{}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        films: action.data
      }
    case SAVE_FILM:{
      const films = [...state.films];
      const filmToUpdate = films.findIndex(f => f.id === action.film.id);
      films[filmToUpdate] = action.film;
      return {
        ...state,
        films:films,
        filmToShow: action.film
      }
    }
    case GET_FILM: {
      console.log(action.filmId);
      
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