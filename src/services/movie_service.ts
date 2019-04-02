
import database from '../firebase';

export function fetchMovies () {
  return database.ref('films').once('value')
  .then(
    response => {
      let data = Object.keys(response.val()).map(i => { 
        return {
          ...response.val()[i],
          id: i
        }
      })
      return data;
    }
  )
  .catch(error => error)
}

export function updateMovie (movie) {
  let movieToUpdate = {
    Poster: movie.Poster,
    Title: movie.Title,
    Type:  movie.Type,
    Year: movie.Year,
    imdbID: movie.imdbID
  }
  return database.ref('films/' + movie.id).set(movieToUpdate)
  .then(result => {
    return result;
  })
}
