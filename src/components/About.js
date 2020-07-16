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
                <img src="/img/logo.svg" alt="" />
            </StyledHero>
            <StyledTeam>
                <div className="team">
                    <h1>Our Team</h1>
                    </div>
                        <img src="/img/Denise.jpg"/>
                    


                
            </StyledTeam>
        </StyledPage>
    )
}

export default About;