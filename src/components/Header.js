import React from 'react';
import { Button, HireMe } from './Button.js';
import Close from '../images/close-popup.png';
import styled from 'styled-components';
import Colors from '../Colors';
import * as Mixins from '../Mixins';
import { media, mediaMin } from '../MediaQueries';
import { withTheme } from 'styled-components';
import * as t from '../Typography';
import { lighten, darken } from 'polished';
import Helmet from 'react-helmet';
import Avatar from '../images/avatar.jpg';

const HeaderWrapper = styled.div`
  height: auto;
  max-height: 48px;
  min-height: 16px;
  z-index: 2;
  position: relative;
  padding: 27px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: ${Colors.white};
  background: ${props => (props.scrolled ? `${Colors.white};` : 'transparent')};
  animation: ${props => (props.scrolled ? 'fadein' : 'fadeout')} 0.5s;
  ${props => props.scrolled && 'box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.1);'}
  ${t.P} {
    color: ${props => (props.scrolled || props.theme === 'white') && `${Colors.darkest};`} ${media.desktop`
        color: ${Colors.white};
      `};
  }
  ${Button} {
    color: ${props => props.scrolled && `${Colors.darkest}`};
    border: 1px solid ${props => props.scrolled && `${Colors.darkest}`};
    &:hover {
      color: ${props => props.scrolled && `${lighten(0.3, Colors.darkest)}`};
      border: 1px solid ${props => props.scrolled && `${lighten(0.3, Colors.darkest)}`};
    }
    ${media.menuMax`
      padding: 15px 20px;
    `}
    ${media.desktop`
      color: ${Colors.white};
      border: 1px solid ${Colors.white};
      &:hover {
        color: ${props => props.scrolled && `${darken(0.3, Colors.white)}`};
        border: 1px solid ${props => props.scrolled && `${darken(0.3, Colors.white)}`};
      }
    `}
  }
  ${HireMe} {
    margin-left: 20px;
    ${media.desktop`
      margin: 30px 0 0 0;
    `}
  }
`;

const Logo = styled.a`
  position: absolute;
  left: 30px;
  top: 16px;
  max-width: 43px;
  height: 40px;
  border-radius: 50%;

  align-self: baseline;
  img {
    width: 100%;
    transition-duration: 0.4s;
  }
  &:hover img {
    transform: scale(1.3);
  }
  ${mediaMin.desktop`
    position: relative;
    left: auto;
    top: 0;
  `}
`;

const Burger = styled.div`
  width: 22px;
  height: 22px;
  align-self: center;
  position: absolute;
  right: 25px;
  top: 25px;
  color: ${Colors.white};
  z-index: 2;
  color: ${props => (props.scrolled || props.theme === 'white' ? `${Colors.darkest}` : `${Colors.white}`)};
  &:hover {
    ${props => (props.scrolled || props.theme === 'white' ? lighten(0.3, Colors.darkest) : darken(0.1, Colors.white))};
    cursor: pointer;
    opacity: 0.9;
  }
  ${mediaMin.desktop`
    display: none;
  `}
  img {
    width: 20px;
    height: 20px;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  height: 48px;
  li {
    display: inline-block;
    position: relative;
  }
  ${mediaMin.desktop`
    display: block;
  `}
  .mobile-only {
    display: none;
  }
  ${media.desktop`
    position: fixed;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${Colors.darkest};
    text-align: center;
    padding: 0;
    z-index: 10;
    padding-top: 20px;
    ${props =>
      props.showMobile &&
      `
      display: block;
      .mobile-only {
        display: block;
      }
    `}
    li {
      display: list-item;
      font-size: 20px;
    }
    ${Button} {
      margin-top: 20px;
    }
  `}
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  ${Mixins.contentMixin}
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class Header extends React.Component {
  state = {
    showMobile: false,
    scrolled: false
  };

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    const { theme } = this.props;
    this.setState({
      theme
    });
  }

  handleBurgerClick = () => {
    this.setState({ showMobile: true });
  };

  handleClose = () => {
    this.setState({ showMobile: false });
  };

  handleScroll = () => {
    let doc = document.documentElement;
    let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (scrollTop >= 100) {
      this.setState({ scrolled: true });
    } else if (scrollTop < 100) {
      this.setState({ scrolled: false });
    }
  };

  openContactPopup = () => {
    this.props.openContactPopup();
  };

  render() {
    const { showMobile, scrolled, theme } = this.state;
    const overflow = showMobile ? 'hidden' : 'auto';
    return (
      <HeaderWrapper theme={theme} scrolled={scrolled}>
        <Helmet>
          <body style={{ overflow: overflow }} />
        </Helmet>
        <ContentWrapper>
          <Logo href="/">
            {/* <img src={Avatar} alt="Kelechi Ogbonna" /> */}
            <svg width="64" height="37" viewBox="0 0 64 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <path
                  d="M11.568 19.2V29.808C11.216 29.904 10.656 30 9.888 30.096C9.12 30.192 8.368 30.24 7.632 30.24C6.896 30.24 6.24 30.176 5.664 30.048C5.12 29.952 4.656 29.76 4.272 29.472C3.888 29.184 3.6 28.784 3.408 28.272C3.216 27.76 3.12 27.088 3.12 26.256V0.912C3.472 0.847999 4.032 0.767999 4.8 0.672C5.568 0.544 6.304 0.48 7.008 0.48C7.744 0.48 8.384 0.544 8.928 0.672C9.504 0.767999 9.984 0.959998 10.368 1.248C10.752 1.536 11.04 1.936 11.232 2.448C11.424 2.96 11.52 3.632 11.52 4.464V12.096L21.504 0.623998C23.68 0.623998 25.232 1.04 26.16 1.872C27.12 2.672 27.6 3.632 27.6 4.752C27.6 5.584 27.392 6.368 26.976 7.104C26.56 7.84 25.888 8.672 24.96 9.6L18.96 15.6C19.76 16.496 20.592 17.424 21.456 18.384C22.352 19.344 23.216 20.288 24.048 21.216C24.912 22.112 25.728 22.976 26.496 23.808C27.296 24.64 27.984 25.36 28.56 25.968C28.56 26.672 28.432 27.296 28.176 27.84C27.92 28.384 27.568 28.848 27.12 29.232C26.704 29.616 26.224 29.904 25.68 30.096C25.136 30.288 24.56 30.384 23.952 30.384C22.64 30.384 21.568 30.064 20.736 29.424C19.904 28.752 19.104 27.968 18.336 27.072L11.568 19.2ZM30.2738 15.408C30.2738 12.912 30.6578 10.704 31.4258 8.784C32.2258 6.864 33.2978 5.264 34.6418 3.984C36.0178 2.672 37.6178 1.68 39.4418 1.008C41.2978 0.335999 43.2978 0 45.4418 0C47.5858 0 49.5698 0.335999 51.3938 1.008C53.2498 1.68 54.8658 2.672 56.2418 3.984C57.6178 5.264 58.6898 6.864 59.4578 8.784C60.2578 10.704 60.6578 12.912 60.6578 15.408C60.6578 17.904 60.2738 20.128 59.5058 22.08C58.7378 24 57.6658 25.616 56.2898 26.928C54.9458 28.208 53.3458 29.184 51.4898 29.856C49.6338 30.528 47.6178 30.864 45.4418 30.864C43.2658 30.864 41.2498 30.528 39.3938 29.856C37.5378 29.152 35.9378 28.144 34.5938 26.832C33.2498 25.52 32.1938 23.904 31.4258 21.984C30.6578 20.064 30.2738 17.872 30.2738 15.408ZM38.9138 15.408C38.9138 18.32 39.5058 20.496 40.6898 21.936C41.8738 23.376 43.4578 24.096 45.4418 24.096C47.4578 24.096 49.0578 23.376 50.2418 21.936C51.4258 20.496 52.0178 18.32 52.0178 15.408C52.0178 12.528 51.4258 10.368 50.2418 8.928C49.0898 7.488 47.5058 6.768 45.4898 6.768C43.5058 6.768 41.9058 7.488 40.6898 8.928C39.5058 10.336 38.9138 12.496 38.9138 15.408Z"
                  fill="url(#paint0_linear)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.119995"
                  y="0"
                  width="63.5378"
                  height="36.864"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <linearGradient id="paint0_linear" x1="31.5" y1="-21" x2="31.5" y2="55" gradientUnits="userSpaceOnUse">
                  <stop offset="0.108632" stop-color="#9922F7" />
                  <stop offset="0.259725" stop-color="#6B138E" />
                  <stop offset="0.407384" stop-color="#E338E7" />
                  <stop offset="0.640625" stop-color="#B32170" stop-opacity="0.74" />
                  <stop offset="0.984375" stop-color="#C6101B" stop-opacity="0.67" />
                </linearGradient>
              </defs>
            </svg>
          </Logo>
          <HeaderNav>
            <Burger alt="Menu" onClick={this.handleBurgerClick} scrolled={scrolled} theme={theme}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 39.7 30.3"
              >
                <path
                  fill="currentColor"
                  d="M36.2,6.1H3.6C2,6.1,0.8,4.9,0.8,3.3v0c0-1.6,1.3-2.8,2.8-2.8h32.6c1.6,0,2.8,1.3,2.8,2.8v0
                  C39,4.9,37.8,6.1,36.2,6.1z"
                />
                <path
                  fill="currentColor"
                  d="M36.2,17.8H3.6c-1.6,0-2.8-1.3-2.8-2.8v0c0-1.6,1.3-2.8,2.8-2.8h32.6c1.6,0,2.8,1.3,2.8,2.8v0
                  C39,16.6,37.8,17.8,36.2,17.8z"
                />
                <path
                  fill="currentColor"
                  d="M36.2,29.5H3.6c-1.6,0-2.8-1.3-2.8-2.8v0c0-1.6,1.3-2.8,2.8-2.8h32.6c1.6,0,2.8,1.3,2.8,2.8v0
                  C39,28.3,37.8,29.5,36.2,29.5z"
                />
                <g>
                  <image width="80" height="62" transform="matrix(0.5 0 0 0.5 54 32.5)" />
                </g>
              </svg>
            </Burger>
            <MenuList {...showMobile && { showMobile }}>
              <Burger onClick={this.handleClose}>
                <img alt="Close menu" src={Close} />
              </Burger>
              <li>
                <Button theme={theme} to="about-me">
                  About me
                </Button>
              </li>
              <li>
                <HireMe theme={theme} onClick={this.openContactPopup} book>
                  Contact me
                </HireMe>
              </li>
            </MenuList>
          </HeaderNav>
        </ContentWrapper>
      </HeaderWrapper>
    );
  }
}

export default withTheme(Header);
