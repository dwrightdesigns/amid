import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: var(--dark-color);
  align-items: center;
  width: 100%;
  background: url(/img/amidoverlay.png), var(--gradient-color);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 5rem 4rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 10rem 8rem;
    flex-direction: row;
    margin: auto;
  }

  .about-amid {
    // width: 80%;
    margin: 1.2rem;

    h1 {
      font-size: 2rem;
      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }
    }

    h4 {
      max-width: 600px;
      margin: 0;
    }
  }

  .begin-buttons {
    display: flex;
    justify-content: center;
    margin: 1.2rem auto;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: column;
    }
    @media screen and (min-width: 1366px) {
      margin: 0;
    }
  }
`;

const StyledBreak = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  color: var(--dark-color);
  align-items: center;
  width: 100%;
  // padding: 4rem 8rem;
  background-color: var(--landing-bg);
  text-align: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 4rem 8rem;
  }

  .about-break {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2.5rem;
    // width: 80%;
    @media screen and (min-width: 1366px) {
      margin: auto;
    }

    .button {
      margin: auto;
      @media screen and (min-width: 768px) {
        margin: 0;
      }
    }

    h1 {
      font-size: 2rem;
      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }
    }

    h4 {
      max-width: 307px;
      margin: 2rem auto;
      @media screen and (min-width: 768px) {
        margin: 2rem 0;
      }
    }
  }

  .break-prev {
    display: flex;
    justify-content: center;
    margin: auto;
    img {
      display: none;
      width: 280px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      @media screen and (min-width: 768px) {
        display: block;
      }
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
  // transform: scaleX(-1);
  @media screen and (min-width: 768px) {
    padding: 5rem 4rem;
  }
  @media screen and (min-width: 1024) {
    padding: 10rem 8rem;
  }

  .method-content {
    // transform: scaleX(-1);
    padding: 2rem;

    h1 {
      font-size: 2rem;
      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }
    }

    h4 {
      max-width: 700px;
      margin: 2rem 0 0 0;
    }
  }
`;

const StyledStart = styled.section`
  background-color: var(--landing-bg);
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }

  h1 {
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h4 {
    max-width: 658px;
    margin: 4rem auto;
  }

  .button {
    margin: auto;
  }
`;

const StyledPage = styled.div`
  padding-top: 10vh;
`

function Landing() {
  return (
    <StyledPage>
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
          <Link className="light-btn button" to="/breathing">
            Begin with Breathing Exercise
          </Link>
        </div>
      </StyledHero>
      <StyledBreak>
        <div className="about-break">
          <h1>Use Your Breaks More Effectively</h1>
          <h4>
            Choose a break that works best for you. Mix it up to keep your day
            on track!
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
    </StyledPage>
  );
}

export default Landing;
