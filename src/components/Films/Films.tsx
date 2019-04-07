import React,{ useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FilmCard from './Film/Film';
import {FilmsProps} from '../../interface';
import {Link} from 'react-router-dom';

import {fetchData} from '../../actions/actions';

const StyledFilmsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Films = (props:FilmsProps) => {
    useEffect(() => {
      props.getFilms();
    },[]);

    return ( 
      <StyledFilmsList>
        {props.films.map(film => {
          return <Link to={`/film/${film.id}`} key={film.id} >
                    <FilmCard 
                      title={film.Title} 
                      src={film.Poster}
                      year={film.Year}
                      id={film.id}
                      clicked={() => {console.log("test");
                      }}/>
                  </Link>
        } )}
      </StyledFilmsList>)
}


const mapStateToProps = (state) => {
  return {
    films: state.films
  };
}

const mapDispatchToProps= (dispatch) => {
  return {
    getFilms : () => dispatch(fetchData())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Films);