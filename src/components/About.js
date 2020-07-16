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
    margin: 1.2rem;

    h1 {
      font-size: 2rem;
      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }
    }
  }

  .container {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    .pic-containers {
      @media screen and (min-width: 400px) {
        display: flex;
        justify-content: space-between;
      }
      .pic {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        width: 140px;
        height: 210px;
        @media screen and (min-width: 1024px) {
          width: 200px;
        }
        img {
          width: 120px;
          border-radius: 16px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          @media screen and (min-width: 1024px) {
            width: 200px;
          }
        }
        h5 {
          text-align: center;
          padding: 1rem 0 0 0;

          span {
            font-weight: 800;
          }
        }
      }
    }
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
    margin: auto;
  }

  cite {
    margin: 1rem;
  }
`;

function About() {
  return (
    <StyledPage>
      <StyledHero>
        <div className="about-amid">
          <h1>About</h1>
          <h4>
            Amid was a collaboration project created by four user engineering
            students at Kenzie Academy in Indianapolis with a goal to help
            students of all ages, no matter how experienced, find the time to
            meditate during their study hours.
          </h4>
        </div>
        <img alt="amid logo" src="/img/Logo.svg" />
      </StyledHero>

      <StyledTeam>
        <div className="team">
          <h1>The Team</h1>
        </div>
        <div className="container">
          <section className="pic-containers">
            <div className="pic">
              <img alt="Amanda" src="/img/Amanda.jpg" />
              <h5>
                <span>(A)</span>manda Key
              </h5>
            </div>
            <div className="pic">
              <img alt="Matt" src="/img/Matt.jpg" />
              <h5>
                <span>(M)</span>att Youngs
              </h5>
            </div>
          </section>
          <section className="pic-containers">
            <div className="pic">
              <img alt="Izzy" src="/img/Izzy.jpg" />
              <h5>
                "<span>(I)</span>zzy" Hasten
              </h5>
            </div>
            <div className="pic">
              <img alt="Denise" src="/img/Denise.jpg" />
              <h5>
                <span>(D)</span>enise Wright
              </h5>
            </div>
          </section>
        </div>
      </StyledTeam>
      <StyledScope>
        <div className="scope">
          <h1>The Scope</h1>
          <p>
            This project had a 4-week deadline. In the scope of that month, the
            team had to research, design, test, engineer and deploy the most
            valuable proponents of the application, making sure they did their
            best to confront the problems of their users.
          </p>
        </div>
        <cite>© created by team amid</cite>
      </StyledScope>
    </StyledPage>
  );
}

export default About;
