import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const scrollToBottom = () => {
  const windowHeight = window.innerHeight;
  window.scrollTo(0, document.body.scrollHeight);
}

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          José Renteria <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am a full-stack developer, with a particular interest in Mobile Development. I also love to game and lift weights. As a Graphic Designer, I'll always have a soft spot for design. The intersection between development and design is where I thrive.
        </SectionText>
        <Button onClick={scrollToBottom}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
