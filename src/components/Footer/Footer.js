import React from "react";
import { FooterContainer, SocialIcons } from "./Footer.styled";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import facebook from './fb.png';
import linkedIn from './linkedin.png';
import skype from './skype.png';
import instagram from './insta.png'
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
const Footer = () => {
  return (
    <FooterContainer>
      <MDBFooter color="blue" className="font-small pt-4 mt-4 footer-area">
        <MDBContainer fluid className="text-center text-md-left">
          <Container>
            <Row>
              <MDBRow style={{ paddingTop: "80px" }}>
                <MDBCol md="3" style={{ textAlign: "left"  }}>
                  <img src="./assets/logo.png" alt="" />
                  <SocialIcons>
                    <img src={facebook} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={skype} alt="" />
                    <img src={instagram} alt="" />
                  </SocialIcons>
                </MDBCol>

                <MDBCol md="3">
                  <ul style={{ textAlign: "left" }}>
                    <li className="title" style={{ paddingBottom: "20px" }}>
                      Menu{" "}
                    </li>
                    <li className="list-unstyled" style={{}}>
                      Home
                    </li>
                    <li className="list-unstyled">About Us</li>
                    <li className="list-unstyled">Products</li>
                    <li className="list-unstyled">Key Informations</li>
                  </ul>
                </MDBCol>
                <MDBCol md="3">
                  <ul
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <li className="title" style={{ paddingBottom: "20px" }}>
                      Important Links
                    </li>
                    <li className="list-unstyled" style={{}}>
                      Clients
                    </li>
                    <li className="list-unstyled">Sister Concerns</li>
                    <li className="list-unstyled">Career</li>
                    <li className="list-unstyled">News & Events</li>
                    <li className="list-unstyled">Contact Us</li>
                  </ul>
                </MDBCol>
                <MDBCol md="3">
                  <ul style={{ textAlign: "left" }}>
                    <li className="title" style={{ paddingBottom: "20px" }}>
                      Other Links
                    </li>
                    <li className="list-unstyled" style={{}}>
                      Terms & Conditions
                    </li>
                    <li className="list-unstyled">Privacy Policy</li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </Row>
          </Container>
        </MDBContainer>

        <MDBContainer fluid>
          <Container>
            <div className="footer-copyright text-center top">
              <Row>
                <Col className="end" style={{ textAlign: "left" }}>
                  © 2021 Mir Group Ltd. <br />
                  Designed & Developed by Dcastalia
                </Col>
              </Row>
            </div>
          </Container>
        </MDBContainer>
      </MDBFooter>
    </FooterContainer>
  );
};

export default Footer;
