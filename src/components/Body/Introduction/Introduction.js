import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";
import Abstract from "./abstract.png";
// import ReactPixel from "react-facebook-pixel";
// import TagManager from "react-gtm-module";
import "./Intro.css";


// const advancedMatching = { em: "azizshaon9@gmail.com" };
// const options = {
//   autoConfig: true,
//   debug: true,
// };
// ReactPixel.init("733677064236635", advancedMatching, options);
// ReactPixel.revokeConsent();


const Introduction = () => {
  const [intro, setIntro] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setIntro(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setIntro]);

  console.log(intro);
  return (
    <>
      <div className="abstractBg">
        <img src={Abstract} alt="" />
        <Container>
          <Row>
            <Col xs={12}>
              {intro.map((introduction) => (
                <div>
                  <h3 className="Title">{`${introduction.id === 15 ? introduction.title : ""}`}</h3>
                  <div className="details">
                  {`${introduction.id === 15 ? introduction.body : ""}`}
                  </div>
                </div>
              ))}

              <div className="read">
                Read More <BsArrowRight />
              </div>
              {/* <button onClick={ReactPixel.grantConsent}>Accept cookies</button>. */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Introduction;
