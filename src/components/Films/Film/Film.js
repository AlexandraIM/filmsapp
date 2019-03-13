import React from 'react';
import './Film.css';

const film = (props) => {
  return (
    <div className="film">
      <img alt="film poster" src={props.src}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default film;