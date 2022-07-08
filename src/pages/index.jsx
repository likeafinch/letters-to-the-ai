import React from 'react';
import {
  Layout,
  Header,
  Section,
  ContactForm,
  LetterForm,
  LetterList,
} from '../components';

// ========================
const IndexPage = () => {
  const [active, setActive] = React.useState('');
  const handleButtonClick = (name) => setActive(name);
  const handleClose = () => setActive('');
  return (
    <Layout>
      <Header active={active} handleButtonClick={handleButtonClick} />
      <Section active={active} handleClose={handleClose} name="write">
        <LetterForm />
      </Section>
      <Section active={active} handleClose={handleClose} name="letters">
        <LetterList />
      </Section>
      <Section active={active} handleClose={handleClose} name="contact">
        <ContactForm />
      </Section>
    </Layout>
  );
};

export default IndexPage;
