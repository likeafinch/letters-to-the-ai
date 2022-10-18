import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const NavigationWrapper = styled.ul`
  ${tw`
    relative
    flex
    items-center
    justify-evenly
    list-none
    w-full
    md:w-4/5
    lg:w-3/5
    max-w-md
    h-12
    divide-text-main
    divide-opacity-50
    divide-x
    shadow-hero
    -mt-1
  `}
  backdrop-filter: blur(5px);
`;

const NavigationButtonWrapper = tw.li`
  relative
  flex
  items-center
  justify-center
  h-full
  w-1/4
  `;

const NavigationButton = styled.button`
  ${tw`
    relative
    flex
    items-center
    justify-center
    h-full
    w-full
    border-none
    shadow-none
    uppercase
    tracking-paragraph
    text-sm
    text-text-main
    font-thin
    bg-transparent
    transition-all
    duration-700
    hover:bg-black
    hover:bg-opacity-10
    `}
`;

const NavigationItem = (props) => {
  const { name, handleButtonClick } = props;
  const handleClick = () => handleButtonClick(name);
  return (
    <NavigationButtonWrapper>
      <NavigationButton onClick={handleClick}>{name}</NavigationButton>
    </NavigationButtonWrapper>
  );
};

NavigationItem.propTypes = {
  handleButtonClick: PropTypes.func,
  name: PropTypes.string,
};

const Navigation = (props) => {
  const { handleButtonClick, sectionNames } = props;
  const NavigationItems = sectionNames.map((name) => (
    <NavigationItem
      key={name}
      name={name}
      handleButtonClick={handleButtonClick}
    />
  ));
  return <NavigationWrapper>{NavigationItems}</NavigationWrapper>;
};

Navigation.propTypes = {
  sectionNames: PropTypes.array,
  handleButtonClick: PropTypes.func,
};

Navigation.defaultProps = {
  sectionNames: ['intro', 'write', 'letters', 'contact'],
};

export default Navigation;
