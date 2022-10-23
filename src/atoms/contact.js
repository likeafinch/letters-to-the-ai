import { atom, selector, useRecoilValue, useRecoilState } from 'recoil';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
/* eslint-disable no-useless-escape */
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ADD_CONTACT = gql`
  mutation CreateContact($contact: ContactInput!) {
    createContact(data: $contact) {
      name
      email
      message
    }
  }
`;

const DEFAULT_CONTACT_FORM = {
  name: '',
  email: '',
  message: '',
};

export const contactForm = atom({
  key: 'contactForm',
  default: DEFAULT_CONTACT_FORM,
});

export const contactFormTouched = selector({
  key: 'contactFormTouched',
  get: ({ get }) => {
    const form = get(contactForm);
    return Object.keys(form).reduce(
      (prev, next) => ({
        ...prev,
        [next]: form[next] !== '',
      }),
      {}
    );
  },
});

export const contactFormErrors = selector({
  key: 'contactFormErrors',
  get: ({ get }) => {
    const touched = get(contactFormTouched);
    const form = get(contactForm);
    return Object.keys(touched).reduce(
      (prev, next) => ({
        ...prev,
        [next]:
          next === 'email' ? emailRegexp.test(form[next]) : !touched[next],
      }),
      {}
    );
  },
});

export const contactFormSubmittable = selector({
  key: 'contactFormSubmittable',
  get: ({ get }) => {
    // const errors = get(contactFormErrors);
    // const touched = get(contactFormTouched);
    return true;
  },
});

const useContactForm = () => {
  const [contact, setContact] = useRecoilState(contactForm);
  const submittable = useRecoilValue(contactFormSubmittable);
  const [addContact, { data }] = useMutation(ADD_CONTACT);

  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (afterSubmitFn) => () => {
    console.log(contact);
    addContact({ variables: { contact } });
    setContact(DEFAULT_CONTACT_FORM);
    if (afterSubmitFn) {
      afterSubmitFn();
    }
  };

  const handleReset = () => setContact(DEFAULT_CONTACT_FORM);

  return {
    ...contact,
    submittable,
    data,
    handleFormChange,
    handleSubmit,
    handleReset,
  };
};

export default useContactForm;
