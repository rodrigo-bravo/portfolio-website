import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/backup.webp';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    img {
      height: 100%;
    }
    outline: none;
    border-color: #4f6576;
    box-shadow: 0 0 20px #4f6576;
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: rgb(202, 218, 174, 0.265);
    padding: 2rem;
    border-radius: 12px;
    border: 0.1rem solid rgb(107, 136, 98);
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 1px #9ecaed;
  }
  .projectItem__title {
    font-size: 1.75em !important;
    color: rgba(255, 253, 248, 1) !important;
    filter: brightness(1.07);
    padding-bottom: 10px;
    border-bottom: 1px solid white;
    text-align: center;
  }
  .projectItem__desc {
    font-size: 1.7rem;
    font-family: 'RobotoMono Regular';
    margin-top: 2rem;
    text-align: center;
    height: 73px;
    color: rgba(255, 255, 255, 0.85);
  }
  .techSectionName {
    color: white;
    margin-bottom: 0.4rem;
    text-align: center;
  }
  .projectItem__tags {
    font-size: 1.1rem;
    margin-top: 4.5rem;
    height: 40px;
    filter: brightness(1.22) !important;
    font-family: 'RobotoMono Regular';
    text-align: center;
  }
  .projectItem__source {
    font-size: 1.1rem;
    font-family: 'RobotoMono Regular';
    margin-top: 4.7rem;
    text-align: center !important;
    color: white !important;
  }
  .projectItem__source__code {
    filter: brightness(1.3);
    border-bottom: 1px solid white;
    border-radius: 1px;
    text-align: center !important;
  }
  .projectItem__source__websiteLink {
    filter: brightness(1.3);
    border-bottom: 1px solid white;
    border-radius: 1px;
  }
  span {
    font-size: 1.7rem;
    color: gold;
  }
  .projectItem__title {
    font-size: 2.2rem;
    color: white;
    min-height: 30px;
    text-align: center;
  }
  @media only screen and (max-width: 344px) {
    width: 100px;
    .projectItem__img {
      height: 230px;
      width: 90vw;
    }
    .projectItem__info {
      height: 265px;
      margin-top: 0.25rem;
      width: 90vw;
    }
    .projectItem__tags {
      padding-top: 1.5rem !important;
      margin: 0 auto;
      height: 70px;
      font-size: 0.8rem;
    }
    .projectItem__title {
      font-size: 1.6rem !important;
    }
    .projectItem__desc {
      font-size: 1rem;
      height: 65px;
    }
    .techSectionName {
      color: white;
      margin-bottom: 0.4rem;
      text-align: center;
    }
    .projectItem__source {
      font-size: 0.8rem;
      padding-top: 1.7rem;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 216px) {
    .projectItem__desc {
      height: 65px;
    }
    .projectItem__tags {
      height: 60px;
    }
    .projectItem__info {
      height: 260px;
    }
  }
  @media only screen and (max-width: 184px) {
    .projectItem__desc {
      height: 85px;
    }
    .projectItem__tags {
      height: 80px;
    }
    .projectItem__info {
      height: 300px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Description.',
  tags = '',
  sourceLink = '/home',
  websiteLink = '/home',
  websiteTitle = '',
  dividor = '',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <p className="projectItem__tags">
          <p className="techSectionName">Technologies</p>
          {tags}
        </p>
        <p className="projectItem__source">
          <a
            href={sourceLink}
            className="projectItem__source__code"
            alt="Source Link"
          >
            Source Code
          </a>
          {dividor}
          <a
            href={websiteLink}
            className="projectItem__source__websiteLink"
            alt="Website Link"
          >
            {websiteTitle}
          </a>
        </p>
      </div>
    </ProjectItemStyles>
  );
}
