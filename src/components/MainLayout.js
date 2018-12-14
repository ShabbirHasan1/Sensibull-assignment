import React from 'react';
import CardComponent from './CardComponent';
import styled from 'styled-components';

const MainLayout = styled.section`
  margin: 222px auto 0;
  padding: 38px 60px;
  width: 100%;
  height: 853px;
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 1000;
  box-sizing: border-box;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 940px;
  }
`
const MainTitle = styled.h1`
  width: 138px;
  height: 32px;
  font-family: IBMPlexSans;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #444444;
  margin: 0px;
  box-sizing: border-box;
`
const MainParagraph = styled.p`
  height: 174px;
  margin: 30px auto 31px;
  font-family: IBMPlexSans;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.61;
  letter-spacing: normal;
  color: #444444;
  box-sizing: border-box;
`


const Main = () => (
  <MainLayout>
    <MainTitle>MANIFESTO</MainTitle>
    <MainParagraph>In the quest to be profitable, a trader often looks outwards, for better research and better trades and more answers. Whereas the most important thing to do is to look inwards. Sensibulll Manifesto is a step towards that inward journey. It is a series of principles which we, as a set of disciplined traders embrace for better trading. We focus on discipline, right thinking, the right attitude towards money. If you have not read it yet, you should start by reading: How to be a better trader Inner Worth - Mind over Markets</MainParagraph>
    <CardComponent />
  </MainLayout>
);

export default Main;
