import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 23rem 0 10rem 0;
  padding-bottom: 6rem;
  padding-top: 20rem;
  background-color: rgb(3, 16, 21) !important;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: -3.89rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  a {
    font-size: 1.5rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    filter: brightness(1.2);
    font-weight: 500;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .spacing {
    padding-top: 0.5rem;
  }
  .spacingMinus {
    margin-top: -1.3rem !important;
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 13rem;
    margin-bottom: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    border-bottom: 1px solid grey;
    color: rgba(255, 255, 255, 0.82) !important;
  }
  @media only screen and (max-width: 768px) {
    padding: 15rem 0;
    .top-section {
      flex-direction: column;
      gap: 0rem;
    }
    .topEmail {
      display: none;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .spacingMinus {
      margin-top: 0rem !important;
    }
    .spacing {
      padding-top: 0rem;
    }
    img {
      max-width: 500px;
    }
  }
  @media only screen and (max-width: 250px) {
    .about__info__heading {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 170px) {
    .about__info__heading {
      font-size: 1.5rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading"> Hi, I am Rodrigo Bravo.</p>
              <h2 className="about__heading">A software engineer</h2>
              <div className="about__info">
                <PText>
                  from Orlando, FL.
                  <br />
                  <br /> I worked with <b>Express</b>, <b>Javascript</b>,&nbsp;
                  <b>Angular</b>, <b>React</b>, <b>Java</b>, <b>Springboot</b>,
                  <b> J2EE</b>, <b>Python</b>, <b>R</b>, <b>Stata</b>,
                  <b> MATLAB</b>, and <b>Oracle SQL</b>.
                  <br />
                  <br />
                  I'm currently working on a stock trading bot with Python.
                </PText>
              </div>
              <a className="topEmail" href="mailto:rodrigoebravo@outlook.com">
                Email
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <div className="spacing" />
              <div className="spacing" />
              <div className="spacing" />
              <AboutInfoItem
                title="College"
                items={['Williams College']}
                subitems={['Bachelor of Arts in Mathematics ', ' & Economics']}
              />
              <br />
              <div className="spacing" />
              <AboutInfoItem
                title="Awards"
                items={[
                  "Dean's List",
                  'QuestBridge Finalist',
                  'Howard A. Halligan Scholarship',
                ]}
              />
              <div className="spacing" />
              <AboutInfoItem
                title="Activities"
                items={['Yearbook Editor', 'Investment Club']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['Angular', 'React', 'JavaScript', 'HTML', 'CSS']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node.js', 'Express', 'Java']}
              />
              <div className="spacingMinus" />
              <AboutInfoItem
                title="Systems Design"
                items={['APIs / Services', 'CDN', 'Caching']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2017"
                items={['Student Technology Consultant']}
              />
              <AboutInfoItem
                title="2018"
                items={['Summer Analyst at Joseph Gunnar & Co.']}
              />
              <AboutInfoItem
                title="2019"
                items={['Library Systems Assistant']}
              />
              <AboutInfoItem
                title="2021"
                items={['Polymath Jr-REU at Williams College SMALL 2021 ']}
              />
              <AboutInfoItem title="2021-" items={['Software Engineer']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
