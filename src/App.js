import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "https://i.ibb.co/Qf6qc9G/x2.png",
  "https://i.ibb.co/RDhVFTf/x3.png",
  "https://i.ibb.co/QX0msBJ/x4.png",
  "https://i.ibb.co/mC7hXH1/x5.png",
  "https://i.ibb.co/d4DsBZj/x6.png",
  "https://i.ibb.co/JqsqfqG/x7.png",
  "https://i.ibb.co/6ZPG57f/x8.png",
  "https://i.ibb.co/8cSNzmn/x9.png",
  "https://i.ibb.co/VD6M0KF/x10.png",
  "https://i.ibb.co/fqFzdp0/x11.png",
  "https://i.ibb.co/BZSNK4L/x12.png",
  "https://i.ibb.co/MDm573v/x13.png",
  "https://i.ibb.co/gJVRbBF/x14.png",
  "https://i.ibb.co/R22RVYm/x15.png",
  "https://i.ibb.co/B3bCtYq/x16.png",
  "https://i.ibb.co/Z23xMfD/x17.png",
  "https://i.ibb.co/BwwfSjV/x18.png",
  "https://i.ibb.co/dr8ZTcm/x19.png",
  "https://i.ibb.co/2tm6Qh2/x20.png",
  "https://i.ibb.co/6tFgTwD/x21.png",
  "https://i.ibb.co/KNPV6MG/x22.png",
  "https://i.ibb.co/r36ncJ4/x23.png",
  "https://i.ibb.co/G9Yrn0V/x24.png",
  "https://i.ibb.co/k8gNMsD/x25.png",
  "https://i.ibb.co/bBB5BrR/x26.png",
  "https://i.ibb.co/qBmVNsL/x27.png",
  "https://i.ibb.co/fMbNd4N/x28.png",
  "https://i.ibb.co/6sFjhDq/x29.png",
  "https://i.ibb.co/8cMJ8y3/x30.png",
  "https://i.ibb.co/jGyVGcs/x31.png",
  "https://i.ibb.co/2y49VD7/x32.png",
  "https://i.ibb.co/yVHNgnT/x33.png",
  "https://i.ibb.co/pwxqST2/x34.png",
  "https://i.ibb.co/f0SxSQY/x35.png",
  "https://i.ibb.co/VBbpgGN/x36.png"
];
 
export default class Slide extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button style={{}} type="button" onClick={() => this.setState({ isOpen: true })}>
          Chapter 1
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false, photoIndex: 0 })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
