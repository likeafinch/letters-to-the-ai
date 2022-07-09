import React from 'react';
import Button, { Actions } from './Button';
import Input, { MultiInputs } from './Input';
import Textarea from './Textarea';
const ContactForm = () => {
  return (
    <>
      <MultiInputs>
        <Input name={'name'} label={'Name'} />
        <Input
          name={'email'}
          label={'E-Mail'}
          type={'email'}
          inputWidth={'100%'}
          inputMarginLeft={1.5}
        />
      </MultiInputs>
      <Textarea name={'message'} label={'Message'} />
      <Actions>
        <Button label={'Submit'} />
        <Button label={'Reset'} variant={'outlined'} />
      </Actions>
    </>
  );
};

export default ContactForm;
