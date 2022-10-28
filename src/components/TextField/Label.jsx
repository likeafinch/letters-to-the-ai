import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const LabelStyles = tw.label`
    text-base
    mb-4
    text-slate-900
    inline-flex
    uppercase
    tracking-paragraph
    peer-required:(
      after:content-["\\002A"]
      after:relative
      after:left-0
      after:pl-[.2rem]
    )
    peer-invalid:text-rose-400
    peer-invalid:font-medium
    hover:font-medium
  `;

function Label(props) {
  const { label, ...labelProps } = props;
  return (
    <LabelStyles {...labelProps}>
      {label}
    </LabelStyles>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
};

Label.defaultProps = {
  label: '',
};

export default Label;
