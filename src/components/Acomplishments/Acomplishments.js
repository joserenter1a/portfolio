import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 422, text: 'Software Engineering'},
  { number: 433, text: 'Network Security', },
  { number: 471, text: 'Artificial Intelligence', },
  { number: 415, text: 'Operating Systems', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Coursework</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`CS${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
