import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GeneralButton,
  GeneralInput,
  GeneralLink,
  GeneralText,
} from '../components/atoms';
import {GeneralHeader} from '../components/molecules';

export const Login = props => {
  return (
    <View style={styles.loginContainer}>
      <GeneralHeader />
      <View>
        <GeneralText title="Inicia sesión" weight size="h1" color="secondary" />
        <View style={styles.inputContainer}>
          <GeneralInput title="Email" placeholder="Email" leftIcon={'mail'} />
          <GeneralInput
            title="Password"
            placeholder="Password"
            secret
            leftIcon={'key'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <GeneralButton
            title="Iniciar sesión"
            color="primary"
            action={() => props.navigation.navigate('Path')}
          />
          <GeneralButton title="Iniciar sesión con Facebook" />
        </View>
        <View style={styles.linkContainer}>
          <GeneralLink
            title="¿Eres nuevo aquí? Regístrate"
            size="h3"
            weight={false}
            color="secondary"
            action={() => props.navigation.navigate('Register')}
          />
        </View>
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
