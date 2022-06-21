import tw, { styled, css } from 'twin.macro';
import { keyframes } from '@emotion/react';
import frames from '../assets/neutrino-frames';

const fadeBackground = keyframes`
	from {
		opacity: .5;
	}
	to {
		opacity: 1;
	}
`;

export const fade = css`
  ${fadeBackground} 2s ease-in;
`;

const backgroundFrames = keyframes`
  ${frames.reduce(
    (prev, frame, index) => `
    ${prev}
    ${(index + 1) * 2}% {
      background-image: url(${frame});
    }
  }`,
    ''
  )}
`;

export const NeutrinoBackground = styled.div`
  ${tw`fixed w-screen h-screen bg-no-repeat mt-auto`}
  background-size: 100%;
  background-position: bottom left;
  z-index: -1;
  animation: ${backgroundFrames} linear 1s infinite;
  background-color: rgba(30, 30, 30, 1);
`;

export const frameKeys = frames.reduce(
  (prev, frame, index) => `
    ${prev}
    ${(index + 1) * 2}% {
      opacity: ${index % 2 ? 1 : 0.5};
      background-image: url(${frame});
    }
  }`,
  ''
);
