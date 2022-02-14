import React from "react";
import {
  HeaderStyled,
  BackgroundImage,
  Logo,
  TransparentBackground,
  HumburgerStyled,
  HeaderTitles,
} from "./Header.styled";
import { Container } from "../GlobalStyle";
import HamburgerMenu from "../HumburgerMenu/HumburgerMenu";

const Header = () => {
  return (
    <HeaderStyled>
      <BackgroundImage src="./assets/Mask Group 38@2x.png" />
      <TransparentBackground />

      <Container>
        <Logo src="./assets/Group 7598.svg" />
        <HumburgerStyled>
          <HamburgerMenu />
        </HumburgerStyled>

        <HeaderTitles>
          <h3>THE SUPERIOR LIFESTYLE</h3>
          <h1>EXCELLENCE DELIVERED</h1>
        </HeaderTitles>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
