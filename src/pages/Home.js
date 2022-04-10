import React from 'react';
import styled from 'styled-components';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

const HomePageStyles = styled.div`
  .main {
    padding-bottom: 6rem;
    background-color: rgb(3, 16, 21) !important;
  }
`;

export default function Home() {
  return (
    <>
      <HomePageStyles>
        <div className="main">
          <HeroSection />
          <ProjectsSection />
          <ContactBanner />
        </div>
      </HomePageStyles>
    </>
  );
}
