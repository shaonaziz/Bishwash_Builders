import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Acontainer,
  Heading,
  CardContainer,
  Title,
  CardText,
  ReadMore,
} from "./Achievement.Styled";
import "./Achievement.css";
import { Container, Card } from "react-bootstrap";
// import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Achievement = () => {
  const boxRef = useRef();
  const customeSlider = useRef();
  const [ach, setAch] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setAch(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setAch]);
  console.log(ach);

  const settings = {
    speed: 1000,
    spaceBetween: 30,
    arrows: false,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=160" });
  });
  return (
    <Acontainer>
      <Container>
        <Heading>Achievements</Heading>
        <CardContainer>
          <Slider {...settings} ref={customeSlider}>
            <div>
              <Card
                className="shadow p-3 mb-5 rounded"
                style={{
                  width: "300px",
                  height: "407px",
                  backgroundColor: "#314550",
                }}
              >
                <Card.Body>
                  <small className="year">2012</small>
                  {ach.map((message) => (
                    <div>
                      <Card.Title>
                        <Title>{`${
                          message.id === 4 ? message.title : ""
                        }`}</Title>
                      </Card.Title>

                      <CardText>
                        {`${message.id === 5 ? message.body : ""}`}
                        <ReadMore></ReadMore>
                      </CardText>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
            {/* ...... */}
            <div>
              <Card
                className="shadow p-3 mb-5 rounded"
                style={{
                  width: "300px",
                  height: "407px",
                  backgroundColor: "#314550",
                }}
              >
                <Card.Body>
                  <small className="year">2012</small>
                  {ach.map((message) => (
                    <div>
                      <Card.Title>
                        <Title>{`${
                          message.id === 4 ? message.title : ""
                        }`}</Title>
                      </Card.Title>

                      <CardText>
                        {`${message.id === 4 ? message.body : ""}`}
                        <ReadMore></ReadMore>
                      </CardText>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>

            {/* ..... */}
            <div>
              <Card
                className="shadow p-3 mb-5 rounded"
                style={{
                  width: "300px",
                  height: "407px",
                  backgroundColor: "#314550",
                }}
              >
                <Card.Body>
                  <small className="year">2012</small>
                  {ach.map((message) => (
                    <div>
                      <Card.Title>
                        <Title>{`${
                          message.id === 4 ? message.title : ""
                        }`}</Title>
                      </Card.Title>

                      <CardText>
                        {`${message.id === 4 ? message.body : ""}`}
                        <ReadMore></ReadMore>
                      </CardText>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                className="shadow p-3 mb-5 rounded"
                style={{
                  width: "300px",
                  height: "407px",
                  backgroundColor: "#314550",
                }}
              >
                <Card.Body>
                  <small className="year">2012</small>
                  {ach.map((message) => (
                    <div>
                      <Card.Title>
                        <Title>{`${
                          message.id === 4 ? message.title : ""
                        }`}</Title>
                      </Card.Title>

                      <CardText>
                        {`${message.id === 4 ? message.body : ""}`}
                        <ReadMore></ReadMore>
                      </CardText>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
          </Slider>
          <div className="Pigination">
          <span
            className="line1"
            onClick={next}
            style={{ border: "2px solid #fff", width: "5%",borderRadius:'4px' ,  }}
            ></span>
          <span
            className="line2"
            onClick={previous}
            style={{ border: "2px solid #707070", width: "5%" ,borderRadius:'4px' }}
          ></span>
        
          <span
            className="line3"
            onClick={previous}
            style={{ border: "2px solid #707070", width: "5%",borderRadius:'4px' }}
          ></span>
        </div>
        </CardContainer>
       
      </Container>
    </Acontainer>
  );
};

export default Achievement;
