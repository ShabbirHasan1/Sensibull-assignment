import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 0;
  position:fixed;
  height: 50px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 0 0 #e9e9e9;
  display: flex;
  flex-direction: row;

`
export const Logo = styled.div`
  justify-content: flex-start;
  width: 20%;
  padding: 6px 0 10px 14px;

  &:hover{
    cursor: pointer;
  }
`

export const FLexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  }
`

export const El = styled.div`
  padding: 16px 16px;
  font-family: IBMPlexSans;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #444444;
  box-sizing: border-box;
  text-decoration: none;

  &:hover{
    cursor: pointer;
  }

  @media (max-width: 767px){
    display: none;
  }


`
export const ProfilePic = styled.div`
  border-radius: 50%;
  background: gray;
  height: 28px;
  width: 28px;

  &:hover{
    cursor: pointer;
  }
`

export const Hamburger = styled.div`
  background-image: url(${props => props.image});
  width: 34px;
  height: 23px;
  object-fit: contain;
  margin-right: 10px;

  @media (max-width: 767px){
    display: visible;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Navbar = () => (
  <Wrapper>
    <Link to="/">
      <Logo>
        <img
          src={require('../images/dark.svg')}
          width="149"
          height="34"
          alt="sensibull-logo"
          className="Logo" />
      </Logo>
  </Link>


    <FLexContainer>
    <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
      <El>Dashboard</El>
    </Link>
      <El>Positions</El>
      <El>Get Options</El>
      <El>Analyzer</El>
      <El>Orders</El>
      <El>...</El>
      <El><ProfilePic /></El>

      <Hamburger
        image={require('../images/menu.svg')}/>
    </FLexContainer>

  </Wrapper>
);

export default Navbar;
