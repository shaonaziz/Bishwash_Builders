import Header from "./components/Header/Header";
import SliderMenu from "./components/Main/SliderMenu";
import VideoModal from "./components/Main/VideoModal";
import MapAndForm from "./components/Main/MapAndForm";
import GalleryImage from "./components/Main/GalleryImage";
import "lightgallery.js/dist/css/lightgallery.css";
import Footer from "./components/Footer/Footer";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <Header/>
      <SliderMenu/>
      <VideoModal/>
      <MapAndForm/>
      <GalleryImage/>
      <Footer/>
    </div>
  );
}

export default App;
