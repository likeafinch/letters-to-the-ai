import { atom, selector } from 'recoil';
/* eslint-disable no-useless-escape */
export const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const stringRegexp = /^.{2,}/;

export function createFormAtoms(initialForm, validateForm, name) {
  const form = atom({
    key: `${name}Form`,
    default: initialForm,
  });
  const touched = atom({
    key: `${name}FormTouched`,
    default: Object.keys(initialForm).reduce(
      (prev, next) => ({
        ...prev,
        [next]: false,
      }),
      {}
    ),
  });
  const errors = selector({
    key: `${name}FormError`,
    get: ({ get }) => {
      const formAtom = get(form);
      const touchedAtom = get(touched);
      return Object.keys(initialForm).reduce(
        (prev, next) => ({
          ...prev,
          [next]: touchedAtom[next] && !validateForm[next](formAtom[next]),
        }),
        {}
      );
    },
  });

  const errorMessages = selector({
    key: `${name}ErrorMessages`,
    get: ({ get }) => {
      const errorsAtom = get(errors);
      Object.keys(errorsAtom)
        .filter((field) => errorsAtom[field])
        .map(
          (errorField) =>
            `${errorField.substring(0, 1).toUpperCase()}${errorField.substring(
              1
            )} value is failing validation.`
        );
    },
  });

  return {
    [`${name}Form`]: form,
    [`${name}FormTouched`]: touched,
    [`${name}FormError`]: errors,
    [`${name}ErrorMessages`]: errorMessages,
  };
}

export const formSubmittable = (touched, errors) =>
  Object.keys(touched).filter(
    (field) => !touched[field] || errors[field],
    true
  ).length === 0;
