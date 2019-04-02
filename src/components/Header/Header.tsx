import React from 'react';
import styled from 'styled-components';
import { HeaderProps } from '../../interface';

const StyledHeader = styled.div`
  overflow: hidden;
  background-color: #f5f5f0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 5px 5px;
  text-align: center;
  color: #ff0000;
  margin-bottom: 10px;
`

const header = (props: HeaderProps) => {
  return ( 
    <StyledHeader>
      <h1>{props.header}</h1>
    </StyledHeader>
    );
}

export default header;