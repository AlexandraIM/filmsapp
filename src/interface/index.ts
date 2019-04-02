
export interface HeaderProps {
  header: string
}

export interface FilmsProps {
  films: Array<Film>,
  editFilm: Function,
  getFilms: Function
}

export interface FilmDetails{
  film: Film,
  films: Array<Film>,
  match: any,
  history: any,
  getFilm: Function,
}

export interface FilmEdit{
  film: Film,
  history: any,
  save: Function
}

interface Film{
  id:string,
  Title:string,
  Poster:string,
  Year:string
}

export interface FilmProps {
  id:string,
  src:string,
  title:string,
  year:string,
  clicked:Function
}

export interface ButtonProps {
  clicked: any,
  children: any,
  color:string
}