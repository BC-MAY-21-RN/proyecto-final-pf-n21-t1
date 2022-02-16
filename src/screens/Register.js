import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Container, ContainerWhite, GeneralText} from '../components/atoms';
import {GeneralHeader, SignButtons} from '../components/molecules/index';
import inputsMapping from '../utils/inputsMapping';
import {LinkContainer} from '../components/molecules';
import triggerValidation from '../utils/authentication/inputValidations';
import {useRegister} from '../assets/hooks/useRegister';
import {AuthContext} from '../navigation/AuthProvider';

const inputsRender = (form, setForm, errorEmail, errorPassword, errorName) => {
  const generalInputs = [
    {
      title: 'Nombre completo',
      placeholder: 'Tu nombre',
      icon: 'person',
      value: form.name.value,
      onChangeText: value => setForm('name', value, form.name.isOk),
      errorMessage: errorName,
    },
    {
      title: 'Correo',
      placeholder: 'Tu correo',
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

export const Register = ({navigation}) => {
  const [form, setForm] = useRegister();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const [errorName, setErrorName] = useState();

  const {register} = useContext(AuthContext);

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
    setForm(
      'name',
      form.name.value,
      triggerValidation(form.name.value, 'name', setErrorName),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.email.value, form.password.value, form.name.value]);
  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader />
        <View>
          <GeneralText
            size={'h1'}
            color={'secondary'}
            title={'Regístrate'}
            weight
          />
        </View>
        {inputsRender(form, setForm, errorEmail, errorPassword, errorName)}
        <SignButtons
          navigation={navigation}
          type="register"
          disabled={form.submit}
          action={() =>
            register(form.name.value, form.email.value, form.password.value)
          }
        />
        <LinkContainer navigation={navigation} type="Login" />
      </Container>
    </ContainerWhite>
  );
};
