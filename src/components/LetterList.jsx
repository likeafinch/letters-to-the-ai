import PropTypes from 'prop-types';
import React from 'react';
import tw, { styled } from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';

const LetterWrapper = styled.div`
  ${tw`
      w-full
      mb-6
      flex
      flex-col
      items-center
      bg-text-alt
      bg-opacity-10
      rounded
      shadow-sm
      `}
  backdrop-filter:blur(100px);
  h4 {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  p {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Subject = styled.h4`
  ${tw`
    text-lg
    font-normal
    tracking-wider
    w-full
    py-2
    px-2
    text-background-alt
    bg-text-main
    bg-opacity-70
    rounded
    `}
  backdrop-filter:blur(100px);
`;

const Message = tw.p`
  text-base
  text-text-alt
  text-opacity-80
  bg-white
  rounded
  bg-opacity-20
  font-light
  tracking-wide
  w-full
  whitespace-pre-wrap
  p-3
`;

const Letter = ({ message, subject }) => (
  <LetterWrapper>
    <Subject>{subject}</Subject>
    <Message>{message}</Message>
  </LetterWrapper>
);
Letter.propTypes = {
  message: PropTypes.string,
  subject: PropTypes.string,
};

const LetterList = () => {
  const {
    fauna: {
      allLetters: { letters },
    },
  } = useStaticQuery(graphql`
    {
      fauna {
        allLetters {
          letters: data {
            _id
            subject
            message
          }
        }
      }
    }
  `);
  return letters?.map(({ _id, ...letterProps }) => (
    <Letter key={_id} {...letterProps} />
  ));
};

export default LetterList;
