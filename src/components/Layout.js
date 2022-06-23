import React from 'react';
import PropTypes from 'prop-types';
import { css, Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { fade } from '../utils';
import '@fontsource/source-sans-pro';
import plasma from '../assets/plasma_d.gif';

const GlobalStyle = css`
  *,
  *:before,
  *:after {
    font-family: 'Source Sans Pro';
    box-sizing: border-box;
    outline: none;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button,
    &::-webkit-scrollbar,
    *::-webkit-scrollbar {
      -webkit-appearance: none;
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body {
    ${tw`bg-transparent overflow-hidden`}
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }
  html {
    ${tw`min-w-full max-w-screen p-0 m-0`}
    height: -webkit-fill-available;
  }
  div#gatsby-focus-wrapper {
    ${tw`relative flex flex-col items-center justify-center w-fill h-screen px-2 md:px-0 bg-no-repeat`}
    animation: ${fade};
    background-image: url(${plasma});
    background-position: left bottom;
    background-color: rgba(50, 50, 50, 1);
    background-blend-mode: lighten;
  }
  a {
    color: #222b2f;
    text-decoration: none;
  }
`;

const Layout = ({ children, title, description }) => {
  return (
    <>
      <BaseStyles />
      <Global styles={GlobalStyle} />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
  description: '',
};

export default Layout;
