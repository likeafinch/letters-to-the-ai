import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

export const variantStyles = {
  contained: tw`
      text-slate-50
      bg-text-main
      hover:cursor-pointer
      hover:bg-gray-700
      `,
  outlined: tw`
    border
    text-text-main
    border-text-main
    border-solid
    bg-transparent
    cursor-pointer
    hover:text-background-main
    hover:bg-text-alt`,
};
const StyledButton = styled.button(({ variant, disabled }) => [
  tw`
    relative
    px-6
    flex
    items-center
    justify-center
    tracking-paragraph
    transition
    transition-duration[.7s]
    shadow-none
    h-14
    uppercase`,
  disabled && tw`pointer-events-none grayscale`,
  variantStyles[variant],
]);

export const Button = ({ label, variant, disabled, ...buttonProps }) => (
  <StyledButton
    variant={variant}
    disabled={disabled}
    data-testid={'button'}
    aria-label={label}
    {...buttonProps}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']).isRequired,
};
Button.defaultProps = {
  disabled: false,
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
