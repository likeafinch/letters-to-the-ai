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
      pl-8
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
        pr-4
        pl-8
        flex
        flex-col
        justify-center
        items-center
        uppercase
        font-thin
        text-slate-300
        tracking-paragraph
        bg-slate-700
        bg-opacity-70
        backdrop-blur
        shadow-none
        rounded
    `}
      mix-blend-mode:color-dodge;
      --mask: radial-gradient(
        2rem at -0.25rem 0.25rem,
        #0000 100%,
        rgb(51, 65, 85)
      );
      -webkit-mask: var(--mask);
      mask: var(--mask);
      > div:last-child {
        flex: none;
      }
    }
    .Toastify__progress-bar,
    .Toastify__progress-bar--info,
    .Toastify__progress-bar--success,
    .Toastify__progress-bar--warning,
    .Toastify__progress-bar--error {
      ${tw`
        absolute
        top-[-1.25rem]
        left-0
        w-16
        h-16
        animate-pulse
        rounded-full
        bg-slate-700
        backdrop-blur
        -z-1
      `}
      mix-blend-mode: difference;
    }

    .Toastify__close-button {
      ${tw`
      absolute
      -top-1
      left-1
      w-14
      h-14
      flex
      flex-col
      justify-center
      items-center
      rounded-full
      backdrop-blur
      bg-slate-900
      bg-opacity-50
      text-slate-400
      z-10
      opacity-100
      hover:(
        bg-slate-400
        bg-opacity-25
        text-slate-700
      )
    `}
      svg {
        ${tw`
          scale-150
        `}
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
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </LayoutBase>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
