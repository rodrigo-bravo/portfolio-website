import { React } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faJava,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Button from './Button';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .cubespinner {
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 100s;
    transform-style: preserve-3d;
    transform-origin: 100px 100px 0;
    margin-left: 27%;
    margin-top: 210px;

    div {
      position: absolute;
      width: 290px;
      height: 290px;
      border: 2px solid #ccc;
      background: rgba(100, 100, 111, 0.45);
      text-align: center;
      font-size: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 12px 0px white;
    }

    .face1 {
      transform: translateZ(145px);
    }
    .face2 {
      transform: rotateY(90deg) translateZ(145px);
    }
    .face3 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(145px);
    }
    .face4 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(145px);
    }
    .face5 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(145px);
    }
    .face6 {
      transform: rotateX(-90deg) translateZ(145px);
    }
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
  .stage-cube-cont {
    width: 100%;
    height: 100%;
    position: static;
    right: 0;
    overflow: hidden;
  }
  .faAngular > path {
    color: #db65b;
  }

  .hero {
    height: 100vh;
    width: 100%;
    text-align: center;
    background: url('./assets/images/image.jpg');
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 3rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      filter: brightness(1.15);
      font-size: 2.5rem;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 6rem;
      color: var(--white);
    }
    .hero__subname {
      margin-top: 0.2rem;
      font-size: 2rem;
      color: rgb(19, 38, 71, 0.5);
      filter: brightness(25.2);
      width: 460px;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 700px;
    margin: 0 auto;
    border-radius: 30px;
  }
  .hero__info {
    margin-top: -2rem;
    margin-left: 25.5rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    bottom: 40px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.5);
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-height: 664px) {
    h1 {
      margin-top: -10rem !important;
    }
  }
  @media only screen and (max-height: 467px) {
    h1 {
      margin-top: -17rem !important;
    }
  }
  @media only screen and (max-height: 367px) {
    h1 {
      margin-top: -22rem !important;
    }
  }
  @media only screen and (max-width: 1482px) {
    .hero__info {
      margin-left: 7rem;
    }
    .hero__subname {
      max-width: 360px;
    }
  }
  @media only screen and (max-width: 432px) {
    .hero__name {
      font-size: 2.2rem !important;
    }
    .hero__subname {
      font-size: 1.2rem !important;
      max-width: 200px;
    }
  }
  @media only screen and (max-width: 768px) {
    .cubespinner {
      div {
        position: absolute;
        width: 150px;
        height: 150px;
        border: 2px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        font-size: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0px lightyellow;
      }
      .face1 {
        transform: translateZ(75px);
        color: #dd0031;
      }
      .face2 {
        transform: rotateY(90deg) translateZ(75px);
        color: #f06529;
      }
      .face3 {
        transform: rotateY(90deg) rotateX(90deg) translateZ(75px);
        color: #28a4d9;
      }
      .face4 {
        transform: rotateY(180deg) rotateZ(90deg) translateZ(75px);
        color: #5ed4f4;
      }
      .face5 {
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(75px);
        color: #efd81d;
      }
      .face6 {
        transform: rotateX(-90deg) translateZ(75px);
        color: #ec4d28;
      }
    }
    @keyframes spincube {
      from,
      to {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      }
      16% {
        transform: rotateY(-90deg);
      }
      33% {
        transform: rotateY(-90deg) rotateZ(90deg);
      }
      50% {
        transform: rotateY(-180deg) rotateZ(90deg);
      }
      66% {
        transform: rotateY(-270deg) rotateX(90deg);
      }
      83% {
        transform: rotateX(90deg);
      }
    }
    .stage-cube-cont {
      width: 0%;
      height: 0%;
      margin-left: 25%;
      position: static;
      right: 0;
      overflow: hidden;
    }
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: 2rem;
      .hero__name {
        font-size: 4.5rem;
      }
      .hero__subname {
        font-size: 1.6rem;
      }
    }
    .hero__img {
      height: 0px;
      width: 0%;
    }
    .container {
      width: 0%;
    }
    .hero__info {
      margin-left: 0rem;
    }
    .hero__social {
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="hero__info">
          <h1 className="hero__heading">
            <span>Hi, I'm</span>
            <span className="hero__name">Rodrigo Bravo,</span>
            <span className="hero__subname">
              a software developer with a background in Mathematics.
            </span>
          </h1>
          <Button btnText="See my projects" btnLink="/projects" />
        </div>
        <div className="container">
          <div className="hero__img">
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faAngular} />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} />
                </div>
                <div className="face3">
                  <div>
                    <FontAwesomeIcon icon={faJava} size="s" />
                  </div>
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGit} size="xs" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
