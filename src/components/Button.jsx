import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

export const variantStyles = {
  contained: tw`
    text-slate-50
    bg-slate-800
    hover:bg-slate-400
      `,
  outlined: tw`
    text-slate-700
    bg-slate-300
    bg-opacity-30
    hover:text-slate-50
    hover:bg-slate-600
    `,
};
const StyledButton = styled.button(({ variant }) => [
  tw`
    relative
    px-6
    flex
    items-center
    justify-center
    tracking-paragraph
    transition
    duration-700
    shadow-none
    h-14
    uppercase
    bg-opacity-80
    hover:cursor-pointer
    disabled:(
      pointer-events-none
      grayscale
      opacity-80
    )
    `,
  variantStyles[variant],
]);

export const Button = ({ label, variant, ...buttonProps }) => (
  <StyledButton
    variant={variant}
    data-testid={'button'}
    aria-label={label}
    {...buttonProps}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']).isRequired,
};
Button.defaultProps = {
  label: 'Label',
  variant: 'contained',
};

export const Actions = tw.div`
  grid
  grid-cols-1
  lg:grid-cols-2
  justify-items-stretch
  mt-auto
  pt-12`;

export default Button;
