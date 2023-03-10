import Link from 'next/link';
import React from 'react';
import { AiFillBehanceSquare, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>José Renteria</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>      
      <li>
        <a href="https://joserenter1a.github.io/Renteria_Jose_Resume.pdf">
          <NavLink>Resumé</NavLink>
        </a>
      </li>   
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/joserenter1a">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jos%C3%A9-renteria-b43443234/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.behance.net/joserenteria8">
          <AiFillBehanceSquare size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
