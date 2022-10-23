import PropTypes from 'prop-types';
import React from 'react';
import { useContactForm } from '../../atoms';
import Button, { Actions } from '../Button';
import Input, { MultiInputs } from '../Input';
import Textarea from '../Textarea';
const ContactForm = ({ handleClose }) => {
  const {
    name,
    email,
    message,
    submittable,
    handleFormChange,
    handleSubmit,
    handleReset,
  } = useContactForm();
  return (
    <>
      <MultiInputs>
        <Input
          onChange={handleFormChange}
          value={name}
          name={'name'}
          label={'Name'}
        />
        <Input
          onChange={handleFormChange}
          value={email}
          name={'email'}
          label={'E-Mail'}
          type={'email'}
          inputWidth={'100%'}
          inputMarginLeft={1.5}
        />
      </MultiInputs>
      <Textarea
        onChange={handleFormChange}
        value={message}
        name={'message'}
        label={'Message'}
      />
      <Actions>
        <Button
          label={'Submit'}
          disabled={!submittable}
          onClick={handleSubmit(handleClose)}
        />
        <Button label={'Reset'} onClick={handleReset} variant={'outlined'} />
      </Actions>
    </>
  );
};

ContactForm.propTypes = {
  handleClose: PropTypes.func,
};

export default ContactForm;
