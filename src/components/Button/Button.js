import React from 'react';


const button = (props) => {
  const buttonStyle = {
    border: 'none',
    color: 'white',
    padding: '14px 28px',
    margin: '5px',
    cursor: 'pointer',
    background:'green'
  }

  return (
    <button style={buttonStyle} type={props.type} onClick={props.clicked}>{props.children}</button>
  )
}

export default button;