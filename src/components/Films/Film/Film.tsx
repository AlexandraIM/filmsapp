import React from 'react';
import styled from 'styled-components';
import {FilmProps} from '../../../interface';


const StyledFilm = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  cursor: pointer;
`

const film = (props: FilmProps) => {
  return (
    <StyledFilm onClick={() => props.clicked(props.id)}>
      <img alt="film poster" src={props.src}></img>
      <h2>{props.title}</h2>
      <p>{props.year}</p>
    </StyledFilm>
  )
}


export default film;