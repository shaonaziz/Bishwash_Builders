import styled from "styled-components";

export const Acontainer = styled.div`
  margin-top: 80px;
  background-color: #314550;
  display: flex;
  flex-direction: colunm;
  width: 100%;
  padding-bottom:200px;
  overflow: hidden;
  position: relative;
`;

export const Heading = styled.text`
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@200&family=Mochiy+Pop+P+One&family=Montserrat:ital@0;1&family=Noto+Sans&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200&family=Passion+One:wght@700&family=Poppins:ital,wght@0,100;0,400;0,500;1,400&family=Readex+Pro:wght@500&family=Roboto&family=Tangerine:wght@700&family=Zen+Antique&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: medium;
  color: #ffffff;
  position: relative;
  top: 80px;
`;

export const CardContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@200&family=Mochiy+Pop+P+One&family=Montserrat:ital@0;1&family=Noto+Sans&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200&family=Passion+One:wght@700&family=Poppins:ital,wght@0,100;0,400;0,500;1,400&family=Readex+Pro:wght@500&family=Roboto&family=Tangerine:wght@700&family=Zen+Antique&display=swap");
  position: relative;
  top: 140px;
  align-item: center;
  .year {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #008c45;
  }

  .Pigination {
    position: relative;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content:center;
    gap:20px;
  }
`;

export const Title = styled.text`
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  text-transform: capitalize;
  position: relative;
  top: 30px;
`;

export const CardText = styled.text`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: normal;
  text-transform: capitalize;
  color: #ffffff;
  text-align: left;
  position: relative;
  top: 30px;
`;

export const ReadMore = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #008c45;
  cursor: pointer;
  text-align: left;
`;
