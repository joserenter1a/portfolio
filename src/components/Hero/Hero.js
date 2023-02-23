import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          José Renteria <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Professionally, I am an aspiring full stack developer, with a particular interest in computational aesthetics. Casually, I love to game and lift weights. As a Graphic Designer, I'll always have a soft spot for design. The intersection between development and design is where I thrive.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;