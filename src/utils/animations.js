import { css } from 'twin.macro';
import { keyframes } from '@emotion/react';

const fadeBackground = keyframes`
	from {
		opacity: .5;
	}
	to {
		opacity: 1;
	}
`;

export const fade = css`
  animation: ${fadeBackground} 2s ease-in;
`;

const heartBeatGrow = keyframes`
	from {
		transform: scale(1);
		opacity: .5;
	}
	to {
		transform: scale(1.25);
		opacity: .75
	}
`;

export const heartBeat = css`
  animation: ${heartBeatGrow} 2s linear;
`;
