import Intro from './Intro';
import LetterForm from './LetterForm';
import LetterList from './LetterList';
import ContactForm from './ContactForm';
import Section from './Section';
import HeroNavigation from './HeroNavigation';
import React from 'react';

const Sections = () => {
  const [active, setActive] = React.useState('');
  const handleClose = () => setActive('');
  const handleButtonClick = (name) => setActive(name);

  return (
    <>
      <HeroNavigation active={active} handleButtonClick={handleButtonClick} />
      <Section active={active} handleClose={handleClose} name="intro">
        <Intro />
      </Section>
      <Section active={active} handleClose={handleClose} name="write">
        <LetterForm handleClose={handleClose} />
      </Section>
      <Section active={active} handleClose={handleClose} name="letters">
        <LetterList />
      </Section>
      <Section active={active} handleClose={handleClose} name="contact">
        <ContactForm handleClose={handleClose} />
      </Section>
    </>
  );
};

export default Sections;
