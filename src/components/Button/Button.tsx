import React from 'react';
import styled from 'styled-components';
import {ButtonProps} from '../../interface';

const StyledButton = styled.button`
    border: none;
    color: white;
    padding: 14px 28px;
    margin: 5px;
    cursor: pointer;
    background: ${props => props.color};
    border-radius: 5px;
`;

const button = (props: ButtonProps) => {
  return (
    <StyledButton color={props.color} onClick={props.clicked}>{props.children}</StyledButton>
  )
}

export default button;