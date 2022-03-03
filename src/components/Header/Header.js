import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { NavBarStyled, HumburgerSyled } from "./Header.styled";
import Banner from "./Banner.png";
import "./Humburger.css";
import "./Header.css";
const Header = () => {
  return (
    <>
      <NavBarStyled>
        <Navbar bg="mybg">
          <Container>
            <Navbar.Brand href="#">
              <img src="./assets/logo.png" alt="" />
            </Navbar.Brand>
            <Navbar.Brand>
              <HumburgerSyled>
                <div class="hamburger">
                  <div></div>
                </div>
              </HumburgerSyled>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavBarStyled>

      <div className="bgCover">
        <img src={Banner} alt="" />

        <Container>
          <Row>
            <Col xs={12}>
              <div className="about">
                <h2>About Us</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
