import PropTypes from 'prop-types';
import React from 'react';
import { useContactForm } from '../../atoms';
import Button, { Actions } from '../Button';
import { TextField, MultiInputs } from '../TextField';

const ContactForm = ({ handleClose }) => {
  const {
    name,
    email,
    message,
    errors,
    touched,
    submittable,
    handleFormChange,
    handleSubmit,
    handleReset,
  } = useContactForm();

  return (
    <>
      <MultiInputs>
        <TextField
          onChange={handleFormChange}
          value={name}
          touched={touched[name]}
          error={errors[name]}
          name={'name'}
          label={'Name'}
          placeholder={'I. C. Weiner'}
        />
        <TextField
          onChange={handleFormChange}
          value={email}
          touched={touched[email]}
          error={errors[email]}
          name={'email'}
          label={'E-Mail'}
          type={'email'}
          placeholder={'noop.noop@vindicator.com'}
          fieldMarginLeft={'1.5rem'}
        />
      </MultiInputs>
      <TextField
        multiline
        onChange={handleFormChange}
        value={message}
        touched={touched[message]}
        error={errors[message]}
        name={'message'}
        placeholder={'Gooyyt dayummmmm!'}
        label={'Message'}
        required
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
