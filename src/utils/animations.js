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
  ${fadeBackground} 2s ease-in;
`;
