import { useRecoilValue, useRecoilState } from 'recoil';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import {
  createFormAtoms,
  formSubmittable,
  stringRegexp,
} from './utils';

// Letter Form

const ADD_LETTER = gql`
  mutation CreateLetter($letter: LetterInput!) {
    createLetter(data: $letter) {
      name
      subject
      message
    }
  }
`;

const INITIAL_LETTER_FORM = {
  name: '',
  subject: '',
  message: '',
};

const VALIDATE_LETTER_FORM = {
  name: (value) => stringRegexp.test(value),
  subject: (value) => stringRegexp.test(value),
  message: (value) => stringRegexp.test(value),
};

const { letterForm, letterFormTouched, letterFormError, letterErrorMessages } = createFormAtoms(
  INITIAL_LETTER_FORM,
  VALIDATE_LETTER_FORM,
  'letter'
);

const useLetterForm = () => {
  const [letter, setLetter] = useRecoilState(letterForm);
  const [touched, setTouched] = useRecoilState(letterFormTouched);
  const errors = useRecoilValue(letterFormError);
  const errorMessages= useRecoilValue(letterErrorMessages);
  const [addLetter, { data }] = useMutation(ADD_LETTER);

  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLetter({
      ...letter,
      [name]: value,
    });
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = (afterSubmitFn) => () => {
    if (!formSubmittable(touched, errors)) {
      errorMessages.map((errorMessage) =>
        toast.error(errorMessage)
      );
    } else {
      addLetter({ variables: { letter } });
      setLetter(INITIAL_LETTER_FORM);
      if (afterSubmitFn) {
        afterSubmitFn();
        toast('Letter for the AI has been left!');
      }
    }
  };

  const handleReset = () => setLetter(INITIAL_LETTER_FORM);

  return {
    ...letter,
    touched,
    errors,
    errorMessages,
    submittable:formSubmittable(touched, errors),
    data,
    handleFormChange,
    handleSubmit,
    handleReset,
  };
};

export default useLetterForm;
