import React, {useContext, useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Container, ContainerWhite, GeneralText} from '../components/atoms';
import {GeneralHeader, SignButtons} from '../components/molecules/index';
import inputsMapping from '../utils/inputsMapping';
import {LinkContainer} from '../components/molecules';
import triggerValidation from '../utils/authentication/inputValidations';
import {AuthContext} from '../navigation/AuthProvider';
import {useForm} from '../assets/hooks/useForm';

const getTypeObject = () => {
  return {
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
};

const getInput = (type, form, setForm, errorMessage) => {
  const typeObject = getTypeObject();
  return {
    title: typeObject[type].title,
    placeholder: typeObject[type].placeholder,
    icon: typeObject[type].icon,
    value: form[type].value,
    onChangeText: value => setForm(type, value, form[type].isOk),
    errorMessage,
    secret: type === 'password' ? true : false,
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
  const [form, setForm] = useForm('register');
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const [errorName, setErrorName] = useState();

  const {register, googleLogin} = useContext(AuthContext);

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
          actionGoogle={() => googleLogin()}
        />
        <LinkContainer navigation={navigation} type="Login" />
      </Container>
    </ContainerWhite>
  );
};
