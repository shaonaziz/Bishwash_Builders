import React, { useState } from "react";
import Header from "./components/Header/Header";
import Introduction from "./components/Body/Introduction/Introduction";
import MasonryGrid from "./components/Body/MasonaryGrid/MasonaryGrid";
import Chairman from "./components/Body/Chairman/Chairman";
import Achievement from "./components/Body/Achievement/Achievement";
import SliderSection from "./components/Body/Slider/Slider";
import Footer from "./components/Footer/Footer";
import "swiper/swiper.scss";
import ReactPixel from "react-facebook-pixel";
import "bootstrap/dist/css/bootstrap.min.css";

const options = {
  autoConfig: true,
  debug: false,
};

function App() {
  ReactPixel.init("yourPixelIdGoesHere", null, options);
  ReactPixel.revokeConsent();
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Introduction />
      <MasonryGrid />
      <Chairman />
      <Achievement />
      <SliderSection />
      <Footer />
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
}

export default App;
