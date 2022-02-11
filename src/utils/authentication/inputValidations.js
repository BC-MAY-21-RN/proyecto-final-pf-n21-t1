/* eslint-disable no-useless-escape */
const inputValidations = {
  string: {
    regex: /[^A-Za-z0-9]+/,
    min: 8,
    max: 50,
  },
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    min: 5,
    max: 50,
    not: true,
  },
};

const LOG = {
  empty: 'El campo está vacío',
  min: 'Es demasiado corto',
  max: 'Es demasiado largo',
  regex: 'El formato es incorrecto',
};

const checkRegex = (value, validation) => {
  return validation.not
    ? !value.match(validation.regex)
    : value.match(validation.regex);
};

const triggerValidation = (value, validation, setError) => {
  validation = inputValidations[validation];
  if (!value) {
    setError(LOG.empty);
    return false;
  } else if (value.length < validation.min) {
    setError(LOG.min);
    return false;
  } else if (value.length > validation.max) {
    setError(LOG.max);
    return false;
  } else if (checkRegex(value, validation)) {
    setError(LOG.regex);
    return false;
  } else {
    setError(undefined);
    return true;
  }
};

export default triggerValidation;
