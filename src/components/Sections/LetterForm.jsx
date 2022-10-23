import PropTypes from 'prop-types';
import React from 'react';
import Button, { Actions } from '../Button';
import Input, { MultiInputs } from '../Input';
import Textarea from '../Textarea';
import { useLetterForm } from '../../atoms';

const LetterForm = ({ handleClose }) => {
  const {
    name,
    subject,
    message,
    submittable,
    handleFormChange,
    handleSubmit,
    handleReset,
  } = useLetterForm();

  return (
    <>
      <MultiInputs>
        <Input
          onChange={handleFormChange}
          value={name}
          name={'name'}
          label={'Name'}
        />
      </MultiInputs>
      <Input
        onChange={handleFormChange}
        name={'subject'}
        label={'Subject'}
        value={subject}
        inputWidth={'100%'}
      />
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

LetterForm.propTypes = {
  handleClose: PropTypes.func,
};

export default LetterForm;
