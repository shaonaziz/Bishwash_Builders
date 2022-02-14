import styled from "styled-components";

export const ContentRow = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const MapAndFormContainer = styled.div`
  margin-top: 150px;
`;

export const MapImage = styled.img`
  width: 600px;
  height: 689px;

  @media screen and (max-width: 768px) {
    width: 330px;
    height: 389px;
  }
`;

export const FormTexts = styled.text`
  h4 {
    text-align: left;
    font: normal normal normal 15px/21px Helvetica;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    opacity: 1;
    border-bottom: 3px solid #d2c7ba;
    display: inline-block;
    position: relative;
    bottom: 330px;
    right: 40px;
    color: #2b3382;
  }
  @media screen and (max-width: 768px) {
    h4 {
      bottom: 600px;
      right: 8px;
    }
  }
`;

export const FormContainer = styled.div`
  position: relative;
  right: 250px;
  bottom: 100px;

 
`;
