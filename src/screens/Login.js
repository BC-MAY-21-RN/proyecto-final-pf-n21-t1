import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GeneralLink, GeneralText} from '../components/atoms';
import {GeneralHeader, SignButtons} from '../components/molecules';
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

const LinkContainer = ({navigation}) => {
  return (
    <View style={styles.linkContainer}>
      <GeneralLink
        title="¿Eres nuevo aquí? Regístrate"
        size="h5"
        weight={false}
        color="secondary"
        action={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export const Login = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
      <GeneralHeader />
      <View>
        <GeneralText title="Inicia sesión" weight size="h1" color="secondary" />
        <View style={styles.inputContainer}>{inputsRender()}</View>
        <View style={styles.buttonContainer}>
          <SignButtons navigation={navigation} type="login" />
        </View>
        <LinkContainer navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    height: '100%',
    width: '95%',
    alignSelf: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '20%',
  },
  inputContainer: {
    height: '40%',
    justifyContent: 'center',
  },
  linkContainer: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
