import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 315, text: 'Data Structures & Algorithms'},
  { number: 399, text: 'Cloud Computing', },
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
