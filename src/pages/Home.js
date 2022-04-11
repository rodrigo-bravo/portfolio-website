import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';

const HomePageStyles = styled.div`
  .main {
    background-color: rgb(3, 16, 21) !important;
  }
`;

export default function Home() {
  return (
    <>
      <HomePageStyles>
        <div className="main">
          <HeroSection />
        </div>
      </HomePageStyles>
    </>
  );
}
