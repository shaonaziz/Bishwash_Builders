import React from "react";
import { Container } from "./Container.styled";
import { Flex } from "./Flex.styled";
import { StyledFooter, TagLineTexts, DesignedBy } from "./Footer.styled";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <Flex>
            <ul>
              <TagLineTexts>
                <h4 className="topper">© 2021 Builders Limited.
                  <br /> <br /> All Rights Reserved.
                </h4>
               
              </TagLineTexts>
            </ul>

            <ul>
              <h5>CORPORATE OFFICE</h5>
              <li>
                New Market City Complex,
                <br /> 44/1 Rahim Square,
                <br /> New Market, Dhaka-1205
              </li>

              <h5>CONTACT</h5>
              <p>9665907</p>
              <p>9665907</p>
              <p>9665907</p>

              <p>info@bblbd.com</p>
            </ul>
            <ul>
              <h5>ABOUT US</h5>
              <li>
                Management Team
                <br /> 44/1 Rahim Square,
                <br />
                Operational Team <br /> 
              </li>

              <h5>PROJECTS</h5>
              <p>Ongoing</p>
              <p>Upcoming</p>
              <p>Completed</p>
              <p>Land Projects</p>
            </ul>
            <ul>
              <h5>SERVICES</h5>
              <li>
                Civil Engineering
                <br />
                Products & Quality
                <br /> Leadership & Initiative
                <br />
                Environmental & Social Responsibilities
                <br />
                Best Business Practices
              </li>

              <h5> </h5>
              <p>Career</p>
              <p>Gallery</p>
            </ul>
            <ul>
              <SocialIcons />
            </ul>
          </Flex>
          <footerText></footerText>
        </Container>
        {/* border Part */}

        <Container className="bottomStyle">
          <Flex className="boder">
            <TagLineTexts>
              <h4>© 2021 Builders Limited.</h4>
            </TagLineTexts>

            <TagLineTexts>
              <h4>© 2021 Builders Limited.</h4>
            </TagLineTexts>
         
            <DesignedBy>
              <h4 ><span className="ddColor"> Designed & Developed by</span>  Dcastalia</h4>
            </DesignedBy>
       
          </Flex>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
