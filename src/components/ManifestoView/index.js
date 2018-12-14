import React from 'react';
import CardComponent from '../../components/CardComponent';  //importing component instead of style for testing purpose
import MediaQuery from 'react-responsive';

import {
  FLexContainerCenter,
  SectionBackground,
  MainLayout,
  Description,
  MainTitle,
  MainParagraph,
  ReadMore
} from './style';


function ManifestoView(props) {
  return (
    <div>
      <MainLayout>

        <Description>
          <MediaQuery query="(min-width: 768px)">
              <MainTitle>MANIFESTO</MainTitle>
          </MediaQuery>

          <MediaQuery query="(max-width: 767px)">
              <MainTitle>The Sensibulll Manifesto</MainTitle>
          </MediaQuery>

          <MainParagraph>
            In the quest to be profitable, a trader often looks outwards, for better research and better trades and more answers. Whereas the most important thing to do is to look inwards. Sensibulll Manifesto is a step towards that inward journey. It is a series of principles which we, as a set of disciplined traders embrace for better trading. We focus on discipline, right thinking, the right attitude towards money. If you have not read it yet, you should start by reading: How to be a better trader Inner Worth - Mind over Markets
          </MainParagraph>

          <FLexContainerCenter>
            <ReadMore>Read More</ReadMore>
          </FLexContainerCenter>

        </Description>

        <CardComponent />


      </MainLayout>
      <SectionBackground/>
    </div>
  );

}
  //*}<CardComponent />
export default ManifestoView;
