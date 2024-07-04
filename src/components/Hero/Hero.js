import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section $row={true} $nopadding={true}>
    <LeftSection>
      <SectionTitle $main={true} $center={true}>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, my name is Jesus Ruelas-Perez. I am a Computer Science Graduate aspiring to becoming a software engineer. I have experience with the following technologies:
        Python, JavaScript, React, and SQL.
      </SectionText>
      {/* <Button onClick={() => window.location ="https://google.com"}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;