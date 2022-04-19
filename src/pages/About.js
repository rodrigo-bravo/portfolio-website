import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.webp';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 23rem 0 10rem 0;
  padding-bottom: 6rem;
  padding-top: 18rem;
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
    font-size: 1em;
    padding: 0.5em 0.5em;
  }
  .topLinkedin {
    background-color: rgb(86, 144, 199);
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
  .linkedinIcon {
    display: inline-block;
    margin-left: 25px;
    margin-top: 25px;
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
  #content-icon,
  #content-icon-email {
    width: 30%;
    display: inline-block;
    border-radius: 12px;
    margin-right: 3%;
  }
  #content-icon img {
    display: inline-block;
    float: left;
    width: 20%;
    height: 100%;
  }
  #content-icon-email img {
    display: inline-block;
    float: left;
    width: 25%;
    height: 100%;
  }
  .img-content {
    width: 60%;
    display: inline-block;
    float: left;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    #content-icon,
    #content-icon-email {
      margin-bottom: 24px;
    }
    .top-section {
      flex-direction: column;
      gap: 0rem;
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
      max-width: 600px;
    }
  }
  @media only screen and (max-width: 260px) {
    .about__info__heading {
      font-size: 2rem;
    }
    .img-content {
      font-size: 0.7rem;
    }
    .about__subheading {
      font-size: 1.4rem;
    }
    .about__heading {
      font-size: 2.2rem;
    }
  }
  @media only screen and (max-width: 190px) {
    .img-content {
      font-size: 0.65rem;
    }
  }
  @media only screen and (max-width: 170px) {
    .about__info__heading {
      font-size: 1.5rem;
    }
    .img-content {
      font-size: 0.6rem;
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
                  <br /> I've worked with <b>Express</b>, <b>Javascript</b>
                  ,&nbsp;
                  <b>Angular</b>, <b>React</b>, <b>Java</b>, <b>Springboot</b>,
                  <b> J2EE</b>, <b>Python</b>, <b>R</b>, <b>Stata</b>,
                  <b> MATLAB</b>, and <b>Oracle SQL</b>.
                  <br />
                  <br />
                  I'm currently working on a stock trading bot with Python.
                </PText>
              </div>
              <div id="content-icon">
                <img
                  src="https://i.ibb.co/ccXF788/logolinkedin.png"
                  alt="Linkedin Logo"
                />
                <a
                  className="img-content"
                  href="https://linkedin.com/in/rodrigo-e-bravo"
                >
                  Linkedin
                </a>
              </div>
              <div id="content-icon">
                <img
                  src="https://i.ibb.co/b2DHsg2/logogithubv6.png"
                  alt="Github Logo"
                />
                <a
                  className="img-content"
                  href="https://github.com/rodrigo-bravo"
                >
                  Github
                </a>
              </div>
              <div id="content-icon-email">
                <img
                  src="https://i.ibb.co/MN7GMJm/logogmailv3.png"
                  alt="Email Logo"
                />
                <a
                  className="img-content"
                  href="mailto:rodrigoebravo@outlook.com"
                >
                  Email
                </a>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" width="500" height="500" />
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
                title="2020"
                items={['Polymath Jr-REU at Williams College SMALL 2020 ']}
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
