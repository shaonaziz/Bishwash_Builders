import styled from "styled-components";


export const GalleryContainer = styled.div`

margin-top:250px;

`
export const GalleryText = styled.div`

h4 {
    text-align: left;
    font: normal normal normal 15px/21px Helvetica;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    opacity: 1;
    border-bottom: 3px solid #d2c7ba;
    display: inline-block;
    position: relative;
    bottom: 50px;
    left:40px;
    color: #2b3382;
  }
  @media screen and (max-width: 768px) {
    h4 {
      bottom: 600px;
      right: 8px;
    }
  }

`