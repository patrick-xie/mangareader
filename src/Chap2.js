import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
 
const images = [
    'https://i.ibb.co/rfYHsRx/x2.png',
    'https://i.ibb.co/VgfgfMj/x3.png',
    'https://i.ibb.co/t43ZHTn/x4.png',
    'https://i.ibb.co/3prVYK8/x5.png',
    'https://i.ibb.co/GFZSrrP/x6.png',
    'https://i.ibb.co/zSyw53f/x7.png',
    'https://i.ibb.co/Zcwz92c/x8.png',
    'https://i.ibb.co/1Gpb3XF/x9.png',
    'https://i.ibb.co/mS5tCBM/x10.png',
    'https://i.ibb.co/mFmRNB5/x11.png',
    'https://i.ibb.co/MRbhCkX/x12.png',
    'https://i.ibb.co/3FWTqQk/x13.png',
    'https://i.ibb.co/4MWgsSt/x14.png',
    'https://i.ibb.co/Jz9X6NB/x15.png',
    'https://i.ibb.co/4srptzs/x16.png',
    'https://i.ibb.co/XFnBX9b/x17.png',
    'https://i.ibb.co/x3Q9zsg/x18.png',
    'https://i.ibb.co/hWTPhXB/x19.png',
    'https://i.ibb.co/LkR4sn5/x20.png',
    'https://i.ibb.co/B2Zk7Kd/x21.png',
    'https://i.ibb.co/L84GdjW/x22.png',
    'https://i.ibb.co/Y49jmFQ/x23.png',
    'https://i.ibb.co/Brsj7KS/x24.png',
    'https://i.ibb.co/HC6rd57/x25.png',
    'https://i.ibb.co/1fttGyC/x26.png',
    'https://i.ibb.co/g4wJTjF/x27.png',
    'https://i.ibb.co/GsyCHBb/x28.png'
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
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Chapter 2
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
