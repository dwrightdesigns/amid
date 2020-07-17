import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class BreathInstruct extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
          },
        },
        {
          breakpoint: 320,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <div className="instruct">
          <p>Find a quiet place to sit down in a comfortable position</p>
        </div>
        <div className="instruct">
          <p>
            Try to move your breathing to the same rhythm of the expanding and
            deflating of the circle.
          </p>
        </div>
        <div className="instruct">
          <p>
            As the circle deflates, take a deep breath in through your nose.
          </p>
        </div>
        <div className="instruct">
          <p>
            As the circle expands, take a slow breath out through your mouth.
          </p>
        </div>
        <div className="instruct">
          <p>Don't focus on perfection.</p>
        </div>
        <div className="instruct">
          <p>
            Allow your thoughts, anxieties and stresses of your day to move
            through. Don’t fight them. Just let them naturally flow by as if
            they were clouds in the sky.
          </p>
        </div>
        <div className="instruct">
          <p>
            As you find yourself naturally synchronized to the expanding and
            deflating of the circle, feel free to close your eyes.
          </p>
        </div>
        <div className="instruct">
          <p>
            Don't worry about your exercise ending. Amid will notify you once
            your timer ends.
          </p>
        </div>
      </Slider>
    );
  }
}

export default BreathInstruct;
