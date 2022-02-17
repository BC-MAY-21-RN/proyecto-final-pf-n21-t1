import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Container, ContainerWhite, GeneralText} from '../components/atoms';
import {GeneralHeader, SignButtons} from '../components/molecules/index';
import inputsMapping from '../utils/inputsMapping';
import {LinkContainer} from '../components/molecules';
import triggerValidation from '../utils/authentication/inputValidations';
import {useRegister} from '../assets/hooks/useRegister';
import {AuthContext} from '../navigation/AuthProvider';

const getInput = (type, form, setForm, errorMessage) => {
  const typeObject = {
    name: {
      title: 'Nombre completo',
      placeholder: 'Tu nombre',
      icon: 'person',
    },
    email: {
      title: 'Correo',
      placeholder: 'Tu correo',
      icon: 'mail',
    },
    password: {
      title: 'Password',
      placeholder: 'Password',
      icon: 'key',
    },
  };
  return {
    title: typeObject[type].title,
    placeholder: typeObject[type].placeholder,
    icon: typeObject[type].icon,
    value: form[type].value,
    onChangeText: value => setForm(type, value, form[type].isOk),
    errorMessage,
  };
};

const inputsRender = (form, setForm, errorEmail, errorPassword, errorName) => {
  const generalInputs = [
    getInput('name', form, setForm, errorName),
    getInput('email', form, setForm, errorEmail),
    getInput('password', form, setForm, errorPassword),
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
