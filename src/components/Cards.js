import React from 'react'
import styled from 'styled-components';


const FLexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardsBox = styled.div`
  width: 220px;
  height: 128px;
  border-radius: 2px;
  background-color: #ffffff;
  margin-top: 31px;
  margin-bottom: 40px;
  padding: 22px 0 auto 16px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1, 1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 767px){
    margin-bottom: 0px;
  }
`

const CellTitle = styled.div`
  height: 23px;
  font-family: IBMPlexSans;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #444444;
  padding: 0px 0px 25px 15px;
  margin: 0px;

  @media (max-width: 767px){
    padding: 0px 0px 25px 36px;
  }
`

const CellImage = styled.div`
  width: 33px;
  height: 32px;
  object-fit: contain;
  padding: 22px 0px 26px 16px;
  margin: 0px;

  @media (max-width: 767px){
    padding: 22px 0px 26px 36px;
`

const Cards = props => (
  <FLexContainer>
    <CardsBox>
      <CellImage>
        <img alt={props.id} src={props.image} />
      </CellImage>
      <CellTitle>
        {props.title}
      </CellTitle>
    </CardsBox>
  </FLexContainer>
);

export default Cards;
