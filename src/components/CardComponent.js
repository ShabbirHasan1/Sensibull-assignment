import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import styled from 'styled-components';

const FLexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`

const CardComponent = (props) => (
  <FLexContainer>
    <Link to="/card/1" style={{ textDecoration: 'none', color: 'white' }} >
      <Cards
        title="BOOKMARKS"
        image={require('../images/group.png')}
      />
    </Link>

    <Link to="/card/2" style={{ textDecoration: 'none', color: 'white' }}>
      <Cards
        title="TRADING"
        image={require('../images/combined-shape.png')}
      />
    </Link>

    <Link to="/card/3" style={{ textDecoration: 'none', color: 'white' }}>
      <Cards
        title="TRADE SELECTION"
        image={require('../images/group-xo.png')}
      />
    </Link>

    <Link to="/card/4" style={{ textDecoration: 'none', color: 'white' }}>
      <Cards
        title="TRENDING"
        image={require('../images/noun-line-graph.png')}
      />
    </Link>

    <Link to="/card/5" style={{ textDecoration: 'none', color: 'white' }}>
      <Cards
        title="STOP LOSS"
        image={require('../images/group-hand.png')}
      />
    </Link>

    <Link to="/card/6" style={{ textDecoration: 'none', color: 'white' }}>
      <Cards
        title="BET SIZING"
        image={require('../images/noun-coin-stack.png')}
      />
    </Link>

  </FLexContainer>
);

export default CardComponent;
