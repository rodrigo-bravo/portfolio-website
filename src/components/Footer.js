import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  background-color: black;
  border-top: 1px solid rgba(128, 128, 128, 0.2);
  padding-top: 3rem;
  padding-bottom: 7rem;
  .container {
    display: flex;
    gap: 5rem;
  }
  .footer__col1 {
    flex: 1;
  }
  .footer__col3 {
    padding-right: 100px;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 1100px) {
    .footer__col3 {
      padding-right: 0px;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Portfolio</h1>
        </div>
        <div className="footer__col2">
          <h1>Links</h1>
          <FooterCol
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <h1>Contact</h1>
          <FooterCol
            links={[
              {
                title: 'Rodrigoebravo@outlook.com',
                path: 'mailto:rodrigoebravo@outlook.com',
              },
              {
                title: 'Florida,\nUnited States',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <h1>Socials</h1>
          <br />
          <SocialIcon url="https://twitter.com/erodbravo" />
          <SocialIcon url="https://github.com/rodrigo-bravo" />
          <SocialIcon url="https://linkedin.com/in/rodrigo-e-bravo" />
        </div>
      </div>
    </FooterStyle>
  );
}
