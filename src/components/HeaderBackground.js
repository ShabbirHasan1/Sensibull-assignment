import React from 'react';
import styled from 'styled-components';

const HeaderBackground = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 428px;
  width: 100%;
  top: 50px;
  position: absolute;
  z-index: -10000;
`

const Header = () => (
  <HeaderBackground
  image={require('../images/rectangle-72@3x.jpg')}/>
);

export default Header;
