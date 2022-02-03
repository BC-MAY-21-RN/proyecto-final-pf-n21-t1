import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, GeneralText} from '../components/atoms';
import {
  GeneralHeader,
  LinkContainer,
  SignButtons,
} from '../components/molecules';
import inputsMapping from '../utils/inputsMapping';

const inputsRender = () => {
  const generalInputs = [
    {
      title: 'Email',
      placeholder: 'Email',
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
//Container no es un styked component, es un componente contenerdor vacio para ser eutilizable que dentro tomo como children todo lo contenido en container y lo regresa con estilos 
export const Login = ({navigation}) => {
  return (
    <Container>
      <GeneralHeader />
      <View>
        <GeneralText title="Inicia sesión" weight size="h1" color="secondary" />
        {inputsRender()}
        <SignButtons navigation={navigation} type="login" />
        <LinkContainer
          navigation={navigation}
          title={'¿Eres nuevo aquí? Regístrate'}
          action={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Register'}],
            })
          }
        />
      </View>
    </Container>
  );
};

