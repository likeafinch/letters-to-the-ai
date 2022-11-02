import React from 'react';
import PropTypes from 'prop-types';
import { css, Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, styled } from 'twin.macro';
import { ToastContainer } from 'react-toastify';
import { fade } from '../utils';
import '@fontsource/source-sans-pro';
import 'react-toastify/dist/ReactToastify.css';
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
    ${tw`
    bg-transparent
    overflow-hidden`}
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }
  html {
    ${tw`min-w-full max-w-screen p-0 m-0`}
    height: -webkit-fill-available;
  }
  div#gatsby-focus-wrapper {
    ${tw`
      relative
      flex
      flex-col
      items-center
      justify-center
      w-fill
      h-screen
      px-2
      md:px-0
      bg-no-repeat
      bg-gray-50`}
    animation: ${fade};
    background-image: url(${plasma});
    background-position: left bottom;
    background-blend-mode: darken;
  }
  a {
    color: #222b2f;
    text-decoration: none;
  }
`;

const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    ${tw`
      w-fill
    `}
    .Toastify__toast {
      ${tw`
        rounded-none
        w-full
        md:w-max
        p-0
        m-0
        static
        bg-transparent
      `}
    }
    .Toastify__toast-body {
      ${tw`
        w-full
        h-16
        md:w-max
        px-4
        flex
        flex-col
        justify-center
        items-center
        uppercase
        font-thin
        text-slate-50
        bg-slate-900/30
        backdrop-blur
        shadow-none
        rounded
    `}
      > div:last-child {
        flex: none;
      }
    }
  }
`;

const LayoutBase = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <Global styles={GlobalStyle} />
      {children}
    </>
  );
};

LayoutBase.propTypes = {
  children: PropTypes.any,
};

const Layout = ({ children }) => (
  <LayoutBase>
    {children}
    <StyledContainer
      position="bottom-left"
      autoClose={3000}
      closeButton={false}
      closeOnClick
      draggable
      pauseOnHover
      hideProgressBar
      theme="dark"
    />
  </LayoutBase>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
