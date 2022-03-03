import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Messages } from "./Chairman.styled";
import { BsArrowRight } from "react-icons/bs";
import Abs from "./abstract.png";
import ChairmanImage from "./chairman.png";
import "./Chairman.css";
const Chairman = () => {
  const [vip, setVip] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setVip(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setVip]);
  console.log(vip);
  return (
    <div className="Cbg">
      <img src={Abs} alt="" />
      <Container>
        <Row className="justify-content-between mt-5 mobile">
          <Col xs={7}>
            <Messages>
              {vip.map((vipMessage) => (
                <div>
                  <h3 className="mb-6">
                    {" "}
                    {`${vipMessage.id === 6 ? vipMessage.title : ""}`}
                  </h3>
                  <p>{`${vipMessage.id === 12 ? vipMessage.body : ""}`}</p>
                  <p>{`${vipMessage.id === 15 ? vipMessage.body : ""}`}</p>
                  <p>{`${vipMessage.id === 36 ? vipMessage.body : ""}`}</p>
                </div>
              ))}

              <p className="board">
                Board of Directors <BsArrowRight />{" "}
              </p>
            </Messages>
          </Col>
          <Col xs={4}>
            <div className="chobi">
              <img src={ChairmanImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Chairman;
