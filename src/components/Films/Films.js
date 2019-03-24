import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import FilmCard from './Film/Film';

import {fetchData, openEditModal} from '../../actions/actions';

import './Films.css';


class Films extends Component{

  componentDidMount(){
    this.props.getFilms();
  }

  render(){
    const films = this.props.films.map(film => {
      return <FilmCard 
              key={film.imdbID} 
              title={film.Title} 
              src={film.Poster}
              year={film.Year}
              id={film.imdbID}
              clicked={this.props.editFilm}/>
    } )
    return ( 
      <div className="films">
        {films}
      </div>)
  }
}

Films.propTypes = {
  editFilm:PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  };
}

const mapDispatchToProps= (dispatch) => {
  return {
    getFilms : () => dispatch(fetchData()),
    editFilm : (id) => dispatch(openEditModal(id))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Films);