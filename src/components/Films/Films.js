import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FilmCard from './Film/Film';

import './Films.css';


class Films extends Component{

  render(){
    const films = this.props.filmsList.map(film => {
      return <FilmCard 
              key={film.id} 
              title={film.title} 
              src={film.img} 
              description={film.description}
              id={film.id}
              clicked={this.props.editFilm}/>
    } )
    return ( 
      <div className="films">
        {films}
      </div>)
  }
}

Films.propTypes = {
  filmsList:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
    img:PropTypes.string,
    title:PropTypes.string.isRequired,
    description:PropTypes.string
  })).isRequired,
  editFilm:PropTypes.func
}

export default Films;