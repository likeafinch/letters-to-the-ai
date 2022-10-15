import React from 'react';
import Button, { Actions } from '../Button';
import Input, { MultiInputs } from '../Input';
import Textarea from '../Textarea';
import { useLetterForm } from '../../atoms';

const LetterForm = () => {
  const {
    email,
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
        <Input
          onChange={handleFormChange}
          name={'email'}
          label={'E-Mail'}
          type={'email'}
          value={email}
          inputWidth={'100%'}
          inputMarginLeft={1.5}
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
          onClick={handleSubmit}
        />
        <Button label={'Reset'} onClick={handleReset} variant={'outlined'} />
      </Actions>
    </>
  );
};

export default LetterForm;
