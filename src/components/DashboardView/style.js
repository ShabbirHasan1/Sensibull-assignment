import styled from 'styled-components';

export const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`

export const Heading = styled.div`
  text-align: center;
  font-size: 24px;
  background: palevioletred;
  margin: 100px;
`
