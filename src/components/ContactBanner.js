import React from 'react';
import styled from 'styled-components';

const ContactBannerStyles = styled.div`
  padding: 0rem 0;
  background-color: rgb(3, 16, 21) !important;
  margin-bottom: 7rem;
  margin-top: 7rem;
  .contactBanner__wrapper {
    border-radius: 12px;
    padding: 3rem 0rem;
    text-align: center;
    background-color: rgb(255, 253, 240, 0.09);
    justify-content: center !important;
  }
  .contactBanner__heading {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  a {
    font-size: 1.5rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.4rem;
    }
    a {
      font-size: 1.35rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <h3 className="contactBanner__heading">Feel free to contact me!</h3>
          <a href="mailto:rodrigoebravo@outlook.com">Email</a>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
