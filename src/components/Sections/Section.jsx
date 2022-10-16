import React from 'react';
import PropTypes from 'prop-types';
import tw, { css, styled } from 'twin.macro';
import { useSpring, animated } from 'react-spring';

const SectionWrapper = styled.div(({ showSection }) => [
  tw`absolute -z-1 opacity-0 flex flex-col items-center justify-center w-full h-screen`,
  css`
    transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
      opacity 0.325s ease-in-out, -webkit-transform 0.325s ease-in-out,
      -webkit-filter 0.325s ease-in-out;
    backdrop-filter: blur(3px);
    transform: translateY(0.25rem);
  `,
  showSection &&
    tw`
    relative z-auto opacity-100
    translate-y-0
  `,
]);

const SectionInner = styled.div(({ showSection, justifyEvenly }) => [
  tw`
    relative
    flex-col
    items-center
    px-5
    md:px-8
    pb-6
    pt-8
    md:pb-6
    md:pt-10
    shadow-hero
    text-text-alt
    text-base
    tracking-paragraph
    -z-1
    scale-0
    overflow-scroll`,
  css`
    width: 42rem;
    transition: opacity 0.325s ease-in-out, transform 0.325s ease-in-out,
      -webkit-transform 0.325s ease-in-out;
    min-height: 50vh;
    backdrop-filter: blur(5px);
    height: max-content;
    max-height: 95vh;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    @media (max-width: 700px) {
      width: 95%;
    }
  `,
  showSection && tw`scale-100 z-10`,
  justifyEvenly && tw`justify-evenly`,
]);

const SectionTitle = tw.h2`relative text-text-main border-b border-text-main mb-8 pb-2 text-2xl tracking-title mr-auto uppercase`;

const CloseButton = styled.button`
  ${tw`absolute z-20 top-2 right-2 flex items-center justify-center h-10 w-10 border-none shadow-none bg-transparent rounded-full`}
  transition: background-color .2s ease-in-out,color .2s ease-in-out;
  p {
    ${tw`relative h-full w-full text-center uppercase text-lg text-text-main font-bold leading-10`}
    transform: scaleX(1.5);
  }
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.075);
  }
`;

const Section = (props) => {
  const { name, active, children, handleClose, justifyEvenly } = props;
  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reverse: name !== active,
  });
  return (
    <SectionWrapper showSection={name === active}>
      <animated.div style={animationProps}>
        <SectionInner
          showSection={name === active}
          justifyEvenly={justifyEvenly}
        >
          <CloseButton onClick={handleClose}>
            <p>X</p>
          </CloseButton>
          <SectionTitle>{name}</SectionTitle>
          {children}
        </SectionInner>
      </animated.div>
    </SectionWrapper>
  );
};
Section.propTypes = {
  active: PropTypes.string,
  children: PropTypes.any,
  name: PropTypes.string,
  handleClose: PropTypes.func,
  justifyEvenly: PropTypes.bool,
};

export default Section;
