import React from 'react';
import { AiFillBehanceSquare, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
       <LinkItem>Contact Information</LinkItem>
      <LinkList>
      
        <LinkColumn>
        
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:209-918-9148">209-918-9148</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:joserenteriaswe@gmail.com">
            joserenteriaswe@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          
          <Slogan> As a college student seeking internship opportunities, 
            I am always looking to connect with potential employers and learn more about the industry. 
            If you would like to inquire about an internship position, Feel free to reach me via email or text.</Slogan>
        <Slogan>  Thank you for visiting my developer portfolio!</Slogan>
        
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/joserenter1a">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jos%C3%A9-renteria-b43443234/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.behance.net/joserenteria8">
            <AiFillBehanceSquare size="3rem" />
          </SocialIcons>

        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
