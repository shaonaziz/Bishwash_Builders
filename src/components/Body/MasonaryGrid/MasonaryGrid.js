import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import M1 from "./m1.png";
import M2 from "./m2.png";
import { Texts } from "./Mgrid.styled";
import "./Mstyled.css";

const MasonryGrid = () => {
  const [desc, setDsec] = useState([]);


  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setDsec(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setDsec]);
  console.log(desc);
 
  return (
    <div className="bgColor">
      <Container className="o1" >
        <Row>
          <Col>
            <Texts>
              {desc.map((info) => (
                <div key={info.id}>
                  <h2>{`${info.id === 2 ? info.title : ""}`}</h2>
                  <p>{`${info.id === 2 ? info.body : ""}`}</p>
                </div>
              ))}
            </Texts>
          </Col>
          <Col md={{ offset: 2 }} className="imageM1">
           
              <img src={M1} alt="" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <img src={M2} alt="" />
          </Col>
          <Col md={{ offset: 1 }} >
            <Texts className="TextM1">
              {desc.map((info, index) => (
                <div key={info.id}>
                  <h2>{`${info.id === 4 ? info.title : ""}`}</h2>
                  <p>{`${info.id === 4 ? info.body : ""}`}</p>
                </div>
              ))}
            </Texts>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MasonryGrid;
