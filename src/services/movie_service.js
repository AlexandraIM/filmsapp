

function fetchMovies () {
  return fetch('http://www.omdbapi.com/?apikey=792db8bc&s=batman')//predefine search parameter 
  .then(response => response.json())
}

export default fetchMovies;