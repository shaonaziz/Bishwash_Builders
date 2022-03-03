import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SliderContainer,
  Heading,
  ContentSlider,
  Details,
} from "./Slider.styled";
import { BsArrowDown } from "react-icons/bs";
import { Container, Card, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
const SliderSection = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios({
      url: "https://fakestoreapi.com/products",
    })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUser]);

  console.log(user)
 

  const settings = {
    infinite: true,
    speed: 1000,
    spaceBetween: 30,
    slidesToShow: 4,
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
  return (
    <SliderContainer>
      <Container>
        <Row>
          <Col>
            <Heading>Board of Directors</Heading>
            <ContentSlider>
              <Slider {...settings}>
                {user.map((item) => (
                  <div key={item.id}>
                      <Card
                    style={{
                      width: "270px",
                      height: "500px",
                      border: "1px solid #fff",
                    }}
                  >
                    <Card.Img variant="top" src={item.image}  style={{width: "250px",
                      height: "250px"}} />

                    <Card.Title>
                      <Details>
                        <h3>{item.category}</h3>
                        <p> {item.title} </p>
                      </Details>
                    </Card.Title>
                  </Card>
                  </div>
                ))}
              </Slider>
            </ContentSlider>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="mt-3">
            <div className="btn2">
             <a href="www.facebook.com">
               <span>Load More</span>
               <span className="arrow">
                 <BsArrowDown style={{color:'#fff'}}/>
               </span>
             </a>
            </div>
          </Col>
        </Row>
      </Container>
    </SliderContainer>
  );
};

export default SliderSection;
