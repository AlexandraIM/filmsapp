import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

const header = (props) => {
  return ( 
    <div className="header">
      <h1>{props.header}</h1>
    </div>
    );
}

header.propTypes = {
  header: PropTypes.string.isRequired
}
export default header;