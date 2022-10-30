import { useRecoilValue, useRecoilState } from 'recoil';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { createFormAtoms, stringRegexp, emailRegexp, formSubmittable } from './utils';

// Contact Form

const ADD_CONTACT = gql`
  mutation CreateContact($contact: ContactInput!) {
    createContact(data: $contact) {
      name
      email
      message
    }
  }
`;

const INITIAL_CONTACT_FORM = {
  name: '',
  email: '',
  message: '',
};

const VALIDATE_CONTACT_FORM = {
  name: (value) => stringRegexp.test(value),
  email: (value) => emailRegexp.test(value),
  message: (value) => stringRegexp.test(value),
};

const {
  contactForm,
  contactFormTouched,
  contactFormError,
  contactErrorMessages,
}  = createFormAtoms(
  INITIAL_CONTACT_FORM,
  VALIDATE_CONTACT_FORM,
  'contact'
);
const useContactForm = () => {
  const [contact, setContact] = useRecoilState(contactForm);
  const [touched, setTouched] = useRecoilState(contactFormTouched);
  const errors = useRecoilValue(contactFormError);
  const errorMessages = useRecoilValue(contactErrorMessages);
  const [addContact, { data }] = useMutation(ADD_CONTACT);

  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContact({
      ...contact,
      [name]: value,
    });
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = (afterSubmitFn) => () => {
    if (!formSubmittable(touched, errors)) {
      errorMessages.map((errorMessage) => toast.error(errorMessage));
    } else {
      addContact({ variables: { contact } });
      setContact(INITIAL_CONTACT_FORM);
      if (afterSubmitFn) {
        afterSubmitFn();
        toast('Contact for the AI has been left!');
      }
    }
  };

  const handleReset = () => setContact(INITIAL_CONTACT_FORM);

  return {
    ...contact,
    touched,
    errors,
    errorMessages,
    submittable: formSubmittable(touched, errors),
    data,
    handleFormChange,
    handleSubmit,
    handleReset,
  };
};

export default useContactForm;
