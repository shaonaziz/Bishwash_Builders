import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { ModalContainer,BackgroundVideo,ButtonVideo } from "./VideoModalStyled";



export  class VideoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <ModalContainer>
        <BackgroundVideo src="./assets/Group 4853@2x.png"></BackgroundVideo>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='sMwKrxZKUSc' onClose={() => this.setState({isOpen: false})} />
        <ButtonVideo onClick={this.openModal}>
          <img src="./assets/Component 155 – 1.png" alt="" />
        </ButtonVideo>
        
        </ModalContainer>
    );
  }
}


export default VideoModal;