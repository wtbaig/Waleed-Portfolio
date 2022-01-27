import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--teal);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--teal-1);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
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
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Waleed Baig</h1>
          <PText>
            My goal is to create unique websites that have a distinctive design.
            I am a freelance web developer and designer from Austin, Texas.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
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
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '559-690-8804',
                path: 'tel:559-690-8804',
              },
              {
                title: 'wtbaig@gmail.com',
                path: 'mailto:wtbaig@gmail.com',
              },
              {
                title: 'Manor, Texas 78653',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'http://github.com/wtbaig',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/waleed-baig-808a6aa5/',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com/Waleed_A_Baig',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            <a target="_blank" rel="noreferrer">
              © 2022 - Waleed Baig | Designed By
            </a>{' '}
            <a target="_blank" rel="noreferrer" href="www.waleedAbaig.com">
              Waleed Baig
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
