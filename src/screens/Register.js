import React from 'react';
import {View} from 'react-native';
import {Container, GeneralText} from '../components/atoms';
import {GeneralHeader, SignButtons} from '../components/molecules/index';
import inputsMapping from '../utils/inputsMapping';
import {LinkContainer} from '../components/molecules';

const inputsRender = () => {
  const generalInputs = [
    {
      title: 'Nombre completo',
      placeholder: 'Tu nombre',
      icon: 'person',
    },
    {
      title: 'Correo',
      placeholder: 'Tu correo',
      icon: 'mail',
    },
    {
      title: 'Password',
      placeholder: 'Password',
      icon: 'key',
      secret: true,
    },
  ];

  return inputsMapping(generalInputs);
};

export const Register = ({navigation}) => {
  return (
    <Container>
      <GeneralHeader />
      <View>
        <GeneralText size={'h1'} color={'secondary'} title={'Regístrate'} />
      </View>
      {inputsRender()}
      <SignButtons navigation={navigation} type="register" />
      <LinkContainer navigation={navigation} type="Login" />
    </Container>
  );
};
