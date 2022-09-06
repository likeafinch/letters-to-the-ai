import { atom, selector, useRecoilValue, useRecoilState } from 'recoil';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
/* eslint-disable no-useless-escape */
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ADD_LETTER = gql`
  mutation CreateLetter($letter: LetterInput!) {
    createLetter(data: $letter) {
      name
      subject
      email
      message
    }
  }
`;

const DEFAULT_LETTER_FORM = {
  email: '',
  name: '',
  subject: '',
  message: '',
};

export const letterForm = atom({
  key: 'letterForm',
  default: DEFAULT_LETTER_FORM,
});

export const letterFormTouched = selector({
  key: 'letterFormTouched',
  get: ({ get }) => {
    const form = get(letterForm);
    return Object.keys(form).reduce(
      (prev, next) => ({
        ...prev,
        [next]: form[next] !== '',
      }),
      {}
    );
  },
});

export const letterFormErrors = selector({
  key: 'letterFormErrors',
  get: ({ get }) => {
    const touched = get(letterFormTouched);
    const { email } = get(letterForm);
    return {
      email: touched.email || !emailRegexp.test(email),
    };
  },
});

export const letterFormSubmittable = selector({
  key: 'letterFormSubmittable',
  get: ({ get }) => {
    // const errors = get(letterFormErrors);
    // const touched = get(letterFormTouched);
    return true;
  },
});

const useLetterForm = () => {
  const [letter, setLetter] = useRecoilState(letterForm);
  const submittable = useRecoilValue(letterFormSubmittable);
  const [addLetter, { data }] = useMutation(ADD_LETTER);

  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLetter({
      ...letter,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(letter);
    addLetter({ variables: { letter } });
    setLetter(DEFAULT_LETTER_FORM);
  };

  const handleReset = () => setLetter(DEFAULT_LETTER_FORM);

  return {
    ...letter,
    submittable,
    data,
    handleFormChange,
    handleSubmit,
    handleReset,
  };
};

export default useLetterForm;