import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from "./Slide/Slide.jsx";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: images.length - 1
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex - 1
    });
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1
    });
  };

  render() {
    let newImages = (
      images.map((image, i) => {
       if ( i === this.state.currentIndex) {
         return <Slide {...image} next={this.goToNextSlide}/>
       }
      })
    )
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
        >
        
        {newImages}
        </div>
      </div>
    );
  }
}

const images = [
  {
    title: "Hello Kamil",
    description: "How are you today",
    url:
      "https://s3.eu-west-2.amazonaws.com/kamilkowalczyk/react_slider/pexels1.jpeg",
    animation: "vertical"
  },
  {
    title: "Hello Martyna",
    description: "Love you",
    url:
      "https://s3.eu-west-2.amazonaws.com/kamilkowalczyk/react_slider/pexels2.jpeg",
    animation: "horizontal"
  },
  {
    title: "Poland",
    description: "How are you today",
    url:
      "https://s3.eu-west-2.amazonaws.com/kamilkowalczyk/react_slider/pexels3.jpeg",
    animation: "vertical"
  },
  {
    title: "Hello Kamil",
    description: "How are you today",
    url:
      "https://s3.eu-west-2.amazonaws.com/kamilkowalczyk/react_slider/pexels4.jpeg",
    animation: "horizontal"
  },
  {
    title: "Real Madrid",
    description: "How are you today",
    url:
      "https://s3.eu-west-2.amazonaws.com/kamilkowalczyk/react_slider/pexels5.jpeg",
    animation: "vertical"
  }
];



Slider.propTypes  = {
    infinite: PropTypes.bool,
    autoplay: PropTypes.bool,
    onChange: PropTypes.func
}

