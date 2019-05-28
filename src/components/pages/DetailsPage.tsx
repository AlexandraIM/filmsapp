import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import FilmCard from '../Films/Film/Film';
import {getFilm} from '../../store/actions/actions';
import {FilmDetails} from '../../interface/index';
import {Link} from 'react-router-dom';

const StyledView = styled.div`
  width: 50%;
  background-color: white;
  padding: 14px 20px;
  margin: auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align:center;
`

const StyledFilmsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

//class Details extends React.Component<FilmDetails>{
const Details = (props:FilmDetails ) => {
  /*componentDidMount(){
    this.props.getFilm(this.props.match.params.id)
  }*/
  useEffect(() => {
    props.getFilm(props.match.params.id)
  },[]);
    
  const handleEditFilm = function() {
    props.history.push(props.match.url + '/edit');
  }

  const handleBack = () =>{
    props.history.goBack();
  }

  
    const films = props.films.map(film => {
      return <Link to={`/film/${film.id}`} key={film.id} >
                <FilmCard 
                  title={film.Title} 
                  src={film.Poster}
                  year={film.Year}
                  id={film.id}
                  clicked={() => {props.getFilm(film.id);
                  }}/>
              </Link>
    })

    return (
      <div>
        <StyledView>
          <h2>{props.film.Title}</h2>
          <img alt="film poster" src={props.film.Poster}></img>
          <p>{props.film.Year}</p>
          <Button color="blue" clicked={handleEditFilm}>Edit</Button>
          <Link to='/'>
            <Button color="lightblue" clicked={null}>Back</Button>
          </Link>
          
        </StyledView>
        <StyledFilmsList>
          {films}
        </StyledFilmsList>
      </div>
    )
  
}

const mapStateToProps = (state) => {
  return {
    film: state.filmToShow,
    films: state.films.sort(() => 0.5 - Math.random()).slice(0, 3)
  };
}

const mapDispatchToProps= (dispatch) => {
  return {
    getFilm : (id) => dispatch(getFilm(id))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);