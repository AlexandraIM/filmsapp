import React from 'react';
import './Header.css'

const header = (props) => {
  return ( 
    <div className="header">
      <h1>{props.header}</h1>
    </div>
    );
}

export default header;