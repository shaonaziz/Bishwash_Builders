import React, { useRef ,useEffect} from "react";
import {
  SliderTexts,
  SliderButton,
  ImageWrapper,
  SliderImage,
  SliderHeading
} from "./SliderMenuStyled";
import { data } from "../data/SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "../GlobalStyle";
import { gsap } from "gsap";
const SliderMenu = () => {
  const boxRef = useRef();
  const customeSlider = useRef();
  const settings = {
    
    infinite: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
          slidesToShow: 1,
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
    <Container>
     <SliderTexts>
        <h2>FEATURED PROJECTS</h2>
        <h1>IMMACULATE DESIGNS BROUGHT TO LIFE</h1>
      </SliderTexts>
      <SliderButton>
        <img src="./assets/Group 4453@2x.png" alt="" onClick={next} />
        <img src="./assets/Group 4452@2x.png" alt="" onClick={previous} />
      </SliderButton>

      <Slider {...settings} ref={customeSlider}>
        {data.map((item, index) => (
          <ImageWrapper key={index}>
            <SliderImage src={item.image} />
            
            <SliderHeading>

              {item.title}
             
            </SliderHeading>
            
          </ImageWrapper>
        ))}
      </Slider>

    </Container>

  );
};

export default SliderMenu;
