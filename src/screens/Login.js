import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Container, GeneralText} from '../components/atoms';
import {
  GeneralHeader,
  LinkContainer,
  SignButtons,
} from '../components/molecules';
import inputsMapping from '../utils/inputsMapping';
import {useLogin} from '../assets/hooks/useLogin';
import triggerValidation from '../utils/authentication/inputValidations';

const inputsRender = (form, setForm, errorEmail, errorPassword) => {
  const generalInputs = [
    {
      title: 'Email',
      placeholder: 'Email',
      icon: 'mail',
      value: form.email.value,
      onChangeText: value => setForm('email', value, form.email.isOk),
      errorMessage: errorEmail,
    },
    {
      title: 'Password',
      placeholder: 'Password',
      icon: 'key',
      secret: true,
      value: form.password.value,
      onChangeText: value => setForm('password', value, form.password.isOk),
      errorMessage: errorPassword,
    },
  ];

  return inputsMapping(generalInputs);
};
//Container no es un styled component, es un componente contenerdor vacio para ser eutilizable que dentro tomo como children todo lo contenido en container y lo regresa con estilos
export const Login = ({navigation}) => {
  const [form, setForm] = useLogin();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();

  useEffect(() => {
    setForm(
      'email',
      form.email.value,
      triggerValidation(form.email.value, 'email', setErrorEmail),
    );
    setForm(
      'password',
      form.password.value,
      triggerValidation(form.password.value, 'string', setErrorPassword),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.email.value, form.password.value]);

  return (
    <Container>
      <GeneralHeader />
      <View>
        <GeneralText title="Inicia sesión" weight size="h1" color="secondary" />
        {inputsRender(form, setForm, errorEmail, errorPassword)}
        <SignButtons
          navigation={navigation}
          type="login"
          disabled={form.submit}
        />
        <LinkContainer navigation={navigation} type="Register" />
      </View>
    </Container>
  );
};
