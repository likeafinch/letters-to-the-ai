import PropTypes from 'prop-types';
import React from 'react';
import Navigation from './Navigation';
import logo from '../../assets/simple-icon.png';
import tw, { styled } from 'twin.macro';

const AIMessageWrapper = styled.div`
  ${tw`absolute flex flex-col items-center justify-center w-full md:w-2/3 h-screen`}
  transform: translateY(${(props) => (props.showHeader ? 0 : 0.25)}rem);
  transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
    opacity 0.325s ease-in-out, -webkit-transform 0.325s ease-in-out,
    -webkit-filter 0.325s ease-in-out;
  background-image: radial-gradient(
    rgba(250, 250, 255, 0.25) 25%,
    transparent 55%
  );
`;

const AIMessageLogoWrapper = styled.div`
  ${tw`relative flex items-center justify-center h-24 w-24 p-1 bg-contain bg-top bg-no-repeat border border-text-main rounded-full`}
  margin-bottom: -1px;
`;
const AIMessageImg = tw.img`relative w-full h-auto p-2 opacity-70`;

const AIMessageHeader = styled.div`
  ${tw`relative flex flex-col items-center justify-center h-52 border-t border-b border-text-main py-12 px-8 my-14`}
  transition: max-height .75s ease,padding .75s ease,opacity .325s ease-in-out;
  transition-delay: 0.25s;
  max-height: 40rem;
  width: 42rem;
  @media (max-width: 700px) {
    width: 100%;
  }
  &:before,
  &:after {
    ${tw`absolute h-14 bg-text-main`}
    content: " ";
    width: 1px;
    left: calc(50% - 0.5px);
  }
  &:before {
    ${tw`-top-14`}
  }
  &:after {
    ${tw`-bottom-14`}
  }
`;
const AIMessageTitle = tw.h1`relative text-2xl md:text-4xl text-text-main font-bold text-center mb-4 uppercase tracking-title`;
const AIMessageParagraph = tw.p`relative text-xs md:text-sm text-text-main text-center font-thin uppercase tracking-paragraph`;

const HeroNavigation = ({ children, active, handleButtonClick }) => {
  return (
    <AIMessageWrapper showHeader={active === ''}>
      <AIMessageLogoWrapper>
        <AIMessageImg src={logo} alt="logo" />
      </AIMessageLogoWrapper>
      <AIMessageHeader>
        <AIMessageTitle>Letters to The AI</AIMessageTitle>
        <AIMessageParagraph>
          {
            'Write your own message for the future omni-artificial inteligience to find and use to define our future'
          }
        </AIMessageParagraph>
      </AIMessageHeader>
      <Navigation handleButtonClick={handleButtonClick} />
    </AIMessageWrapper>
  );
};

HeroNavigation.propTypes = {
  active: PropTypes.string,
  children: PropTypes.any,
  handleButtonClick: PropTypes.func,
};

export default HeroNavigation;