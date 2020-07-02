import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHero = styled.section`
  display: flex;
  justify-content: space-evenly;
  color: var(--dark-color);
  align-items: center;
  width: 100%;
  padding: 10rem 8rem;
  background: url(/img/amidoverlay.png), var(--gradient-color);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .about-amid {
    width: 80%;

    h4 {
      max-width: 600px;
      margin: 0;
    }
  }

  .begin-buttons {
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
  }
`;

const StyledBreak = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  color: var(--dark-color);
  align-items: center;
  width: 100%;
  padding: 4rem 8rem;
  background-color: var(--landing-bg);

  .about-break {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;

    .button {
      margin: 0;
    }

    h4 {
      width: 307px;
      margin: 3rem 0 3rem 0;
    }
  }

  .break-prev {
    display: flex;
    justify-content: center;
    margin: auto;
    img {
      width: 280px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

const StyledMethod = styled.section`
  background: linear-gradient(
      180.03deg,
      rgba(255, 255, 255, 0.5) 15.67%,
      rgba(255, 255, 255, 0.5) 144.67%
    ),
    url(img/beach.jpg);
  background-position: center;
  background-size: cover;
  padding: 10rem 8rem;
  transform: scaleX(-1);

  .method-content {
    transform: scaleX(-1);
    h4 {
      max-width: 700px;
      margin: 4rem 0 0 0;
    }
  }
`;

const StyledStart = styled.section`
  background-color: var(--landing-bg);
  padding: 4rem 8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h4 {
      max-width: 658px;
      margin: 4rem auto;
  }

  .button {
    margin: auto;
  }
`;

function Landing() {
  return (
    <>
      <StyledHero>
        <div className="about-amid">
          <h1>Amid is...</h1>
          <h4>
            A pomodoro timer which focuses on the breaks rather than the tasks.
            It creates moments of mindfulness throughout the day to give you
            time that might otherwise not be achievable.
          </h4>
        </div>
        <div className="begin-buttons">
          <Link className="dark-btn button" to="/timer">
            Begin with Focus Timer
          </Link>
          <Link className="light-btn button" to="/breath">
            Begin with Breathing Exercise
          </Link>
        </div>
      </StyledHero>
      <StyledBreak>
        <div className="about-break">
          <h1>Use Your Breaks More Effectively</h1>
          <h4>
            Choose a break that works best for you. <br /> Mix it up to keep
            your day on track!
          </h4>
          <Link className="dark-btn button" to="/break">
            Choose Your Break
          </Link>
        </div>
        <div className="break-prev">
          <img src="/img/breakpreview.png" alt="" />
        </div>
      </StyledBreak>
      <StyledMethod>
        <div className="method-content">
          <h1>The Pomodoro Method</h1>
          <h4>
            is a time management technique that uses alternating timers to
            achieve your goals. One timer is used to track your task that you'd
            like to accomplish and the other is a short break period.
          </h4>
        </div>
      </StyledMethod>
      <StyledStart>
        <h1>Mindfullness and Meditation</h1>
        <h4>
          Mindfulness practices such as meditation have been known to increase
          your focus throughout the day and can reduce stress levels. We could
          all use a little more of that.
        </h4>
        <Link className="gradient-btn button" to="/timer">
          Get Started!
        </Link>
      </StyledStart>
    </>
  );
}

export default Landing;
