import React from 'react';
import inputsMapping from '../../../utils/inputsMapping';

export const LoginRegisterInputs = (
  form,
  setForm,
  errorName,
  errorEmail,
  errorPassword,
) => {
  const generalInputs = [
    {
      title: 'Nombre',
      placeholder: 'Nombre',
      icon: 'mail',
      value: undefined,
      onChangeText: value => setForm('name', value, form.name.isOk),
      errorMessage: errorName,
    },
    {
      title: 'Correo',
      placeholder: 'Correo',
      icon: 'mail',
      value: form.email.value,
      onChangeText: value => setForm('email', value, form.email.isOk),
      errorMessage: errorEmail,
    },
    {
      title: 'Contraseña',
      placeholder: 'Contraseña',
      icon: 'key',
      secret: true,
      value: form.password.value,
      onChangeText: value => setForm('password', value, form.password.isOk),
      errorMessage: errorPassword,
    },
  ];
  return <>{inputsMapping(generalInputs)}</>;
};
