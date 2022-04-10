import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-left: 2.6rem;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
    max-width: 2.5rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    line-height: 2rem;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0.4rem;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
      max-width: 100%;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['React', 'Angular'],
  subitems = ['', ''],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
            {subitems}
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
