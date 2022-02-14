import styled from "styled-components";

export const StyledFooter = styled.footer`
  
  margin-top:200px;
  background-color: #313033;
  color: #fff;
  padding: 100px 0 60px;	
  }
  ul h5{
	  margin-top:90px;
	  margin-bottom:23px;
    color:#C9C9C9;
    font: normal normal medium 12px/20px Scotch;
    letter-spacing: 0.24px;
  }

  ul {
    list-style-type: none;
    padding-top: 48px;
    padding-right: 108px;
    
  }
 
  .bottomStyle{
    margin-top:40px;
    margin-bottom:30px;
	border-top:1px solid #fff;
  }


  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul li {
      padding: 0;
      font: normal normal normal 14px/16px Helvetica;
      letter-spacing: 0px;
      color: #F7F3F0;
    }
    p {
      text-align: center;
      font: normal normal normal 14px/16px Helvetica;
letter-spacing: 0px;
color: #F7F3F0;
    }
  }
`;

export const TagLineTexts = styled.text`
  padding-right: 15px;
  text-align: left;
  font: normal normal bold 14px/20px Helvetica;
  letter-spacing: 0.28px;
  color: #ffffff;
  .topper {
    margin-bottom: 150px;
  }
`;
export const DesignedBy = styled.text`
  padding-left: 90px;
  .ddColor {
    color: #c9c9c9;
  }
`;
