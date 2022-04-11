import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/backup.jpg';

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
  }
  .projectItem__img:focus {
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 100px #9ecaed;
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: rgb(202, 218, 174, 0.35);
    padding: 2rem;
    border-radius: 12px;
    border: 0.1rem solid rgb(107, 136, 98);
  }
  .projectItem__title {
    font-size: 1.75em !important;
    color: rgba(255, 253, 248, 1) !important;
    filter: brightness(1.07);
    padding-bottom: 10px;
    border-bottom: 1px solid white;
    height: 36px;
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
  @media only screen and (max-width: 332px) {
    width: 200px !important;
    .projectItem__img {
      width: 275px !important;
      min-width: 275px !important;
      justify-content: center !important;
    }
    .projectItem__info {
      width: 275px !important;
    }
    .projectItem__tags {
      font-size: 1rem;
    }
    .projectItem__title {
      font-size: 1.24em !important;
      height: 24px;
    }
    .projectItem__desc {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 522px) {
    .projectItem__img {
      width: auto;
      min-width: 100%;
      height: 400px;
    }
    .projectItem__info {
      width: auto;
    }
  }
  @media only screen and (max-width: 304px) {
    width: 150px !important;
    .projectItem__img {
      width: 260px !important;
      min-width: 260px !important;
    }
    .projectItem__info {
      width: 260px !important;
    }
  }
  @media only screen and (max-width: 286px) {
    width: 150px !important;
    .projectItem__img {
      width: 250px !important;
      min-width: 250px !important;
    }
    .projectItem__info {
      width: 250px !important;
    }
  }
  @media only screen and (max-width: 280px) {
    width: 150px !important;
    .projectItem__img {
      width: 240px !important;
      min-width: 240px !important;
    }
    .projectItem__info {
      width: 240px !important;
    }
  }
  @media only screen and (max-width: 268px) {
    width: 150px !important;
    .projectItem__img {
      width: 230px !important;
      min-width: 230px !important;
    }
    .projectItem__info {
      width: 230px !important;
    }
  }
  @media only screen and (max-width: 255px) {
    width: 150px !important;
    .projectItem__img {
      width: 220px !important;
      min-width: 220px !important;
    }
    .projectItem__info {
      width: 220px !important;
    }
    .projectItem__title {
      font-size: 1rem !important;
    }
  }
  @media only screen and (max-width: 245px) {
    .projectItem__img {
      width: 20rem !important;
      min-width: 20rem !important;
    }
    .projectItem__info {
      width: 20rem !important;
    }
  }
  @media only screen and (max-width: 184px) {
    width: 120px !important;
    .projectItem__img {
      width: 140px !important;
      min-width: 140px !important;
    }
    .projectItem__info {
      width: 140px !important;
    }
    .projectItem__tags {
      font-size: 1rem;
    }
    .projectItem__title {
      font-size: 0.9em !important;
      height: 24px;
    }
    .projectItem__desc {
      font-size: 0.9rem;
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
          <a href={sourceLink} className="projectItem__source__code">
            Source Code
          </a>
          {dividor}
          <a href={websiteLink} className="projectItem__source__websiteLink">
            {websiteTitle}
          </a>
        </p>
      </div>
    </ProjectItemStyles>
  );
}
