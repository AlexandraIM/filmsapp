import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://filmsdb-ce541.firebaseio.com/films.json'
});


export default instance;