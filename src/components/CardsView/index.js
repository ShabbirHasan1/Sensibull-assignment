import React from 'react';
import {
  Heading,
  Para
} from './style';

const CardsView = (props) => {
   console.log(props)
   return (
     <div>
       <Heading>A Thing I've Done</Heading>
       <Para>This page is for the item with the id of {props.match.params.id}</Para>
     </div>
   )
};



export default CardsView;
