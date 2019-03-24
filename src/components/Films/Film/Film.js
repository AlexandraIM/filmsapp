import React from 'react';
import PropTypes from 'prop-types';
import './Film.css';

const film = (props) => {
  return (
    <div className="film" onClick={() => props.clicked(props.id)}>
      <img alt="film poster" src={props.src}></img>
      <h2>{props.title}</h2>
      <p>{props.year}</p>
    </div>
  )
}

film.propTypes = {
  id:PropTypes.string.isRequired,
  src:PropTypes.string,
  title:PropTypes.string.isRequired,
  description:PropTypes.string
}


export default film;