import styled from "styled-components";

export const HeaderStyled = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: clamp(70px, 25vh, 220px);
  background: transparent linear-gradient(180deg, #00000000 0%, #00000080 100%)
    0% 0% no-repeat padding-box;

  
`;

export const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: -1;
`;
export const Logo = styled.img`
  position: relative;
  bottom: 250px;
`;

export const TransparentBackground = styled.div`
  background: transparent linear-gradient(0deg, #00000000 0%, #000000 180%) 0%
    0% no-repeat padding-box;
  height: 20%;
  position: relative;
  bottom: 180px;
`;
export const HumburgerStyled = styled.div`
  background: transparent url("img/Hamburger.png") 0% 0% no-repeat padding-box;
  opacity: 1;
  position: fixed;
  color: #fff;
  left: 1350px;
  top: 10px;
  @media screen and (max-width: 768px) {
    position: fixed;
  color: #fff;
  left: 441px;
  }
  @media screen and (max-width: 1233px) {
    position: fixed;
  color: #fff;
  left: 595px;
  }
`;

export const HeaderTitles = styled.text`
  h3 {
    text-align: left;
    letter-spacing: 0px;
    color: #ffffff;
    font: normal normal medium 50px/30px Scotch;
    opacity: 1;
    position: relative;
    top: 120px;
  }
  h1 {
    text-align: left;
    font: normal normal medium 50px/30px Scotch;
    letter-spacing: 0px;
    color: #ffffff;

    opacity: 1;
    position: relative;
    top: 150px;

    font-size: 50px;
  }
`;
