import React from "react";
import styled from "styled-components";

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

  img {
      width: 20rem;
      padding-bottom: 1rem;
  }
`;
const StyledPage = styled.div`
  padding-top: 10vh;
`;

const StyledTeam = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
color: var(--dark-color);
align-items: center;
width: 100%;
background: var(--landing-bg);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media screen and (min-width: 768px) {
  padding: 5rem 4rem;
}
@media screen and (min-width: 1024px) {
  padding: 10rem 8rem;
  flex-direction: row;
  flex-flow: wrap;
  margin: auto;
}

.team {
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

img {
    width: 20rem;
    margin-bottom: 1em;
    border-style: solid;
    border-width: .2rem;
    border-radius: 1em;
    border-color: var(--dark-color);
}
h5 {
  margin-bottom: 1em;
  text-align: center;
}
cite {
  padding: 1rem;
}
`;

const StyledScope = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
color: var(--dark-color);
align-items: center;
width: 100%;
background: linear-gradient(
  180.03deg,
  rgba(255, 255, 255, 0.5) 15.67%,
  rgba(255, 255, 255, 0.5) 144.67%
),
url(img/beach.jpg);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding: 1rem 1rem;
@media screen and (min-width: 768px) {
  padding: 5rem 4rem;
}
@media screen and (min-width: 1024px) {
  padding: 10rem 8rem;
  flex-direction: row;
  margin: auto;
}
`;



function About() {
  return (
    <StyledPage>
      <StyledHero>
        <div className="about-amid">
          <h1>About</h1>
          <h4>
            A pomodoro timer which focuses on the breaks rather than the tasks.
            It creates moments of mindfulness throughout the day to give you
            time that might otherwise not be achievable.
          </h4>
        </div>
        <img alt="amid logo" src="/img/logo.svg" />
      </StyledHero>
      
      <StyledTeam>
        <div className="team">
          <h1>The Team</h1>
        </div>
        <div>
        <img alt="Denise" src="/img/Denise.jpg" />
        <h5>Denise Wright</h5>
        </div>
        <div>
        <img alt="Matt" src="/img/Matt.jpg" />
        <h5>Matt Youngs</h5>
        </div>
        <div>
        <img alt="Izzy" src="/img/Izzy.jpg" />
        <h5>Jacob "Izzy" Hasten</h5>
        </div>
        <div>
        <img alt="Amanda" src="/img/Amanda.jpg" />
        <h5>Amanda Key</h5>
        </div>
      </StyledTeam>
      <StyledScope>
        <div className="scope">
          <h1>The Scope</h1>
          <p>This project had a 4-week deadline. In the scope of that month, the team had to research, design, test, engineer and deploy the most valuable proponents of the application, making sure they did their best to confront the problems of their users.</p>
        </div>
      </StyledScope>
      <cite>created by team amid</cite>
    </StyledPage>
  )
}

export default About;