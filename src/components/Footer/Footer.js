import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn> */}

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jruelasperez711@gmail.com">jruelasperez711@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>

        <CompanyContainer>
          <Slogan>Innovating one project at a time.</Slogan>
        </CompanyContainer>

        <SocialIconsContainer style={{ flexDirection: "row", justifyContent: "flex-start" }} >
          <SocialIcons href="https://github.com/Jesus711">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/jesus-ruelas-20a319196/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          {/* <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
          
        </SocialIconsContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
