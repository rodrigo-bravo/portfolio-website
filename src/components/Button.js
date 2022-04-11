import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2rem;
    background-color: rgb(255, 253, 240, 0.8);
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: black;
    font-weight: 600;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 432px) {
    .button {
      font-size: 1.28rem;
    }
  }
  @media only screen and (max-width: 250px) {
    .button {
      font-size: 0.9rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
