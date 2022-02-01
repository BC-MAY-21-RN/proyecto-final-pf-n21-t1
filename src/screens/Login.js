import React from 'react';
import {View} from 'react-native';
import {
  GeneralButton,
  GeneralInput,
  GeneralLink,
  GeneralText,
} from '../components/atoms';
import {GeneralHeader} from '../components/molecules/GeneralHeader';

export const Login = () => {
  return (
    <>
      <GeneralHeader />
      <View>
        <GeneralText
          title="Inicia sesión"
          weight="bold"
          size="h1"
          color="secondary"
        />
        <View>
          <GeneralInput title="Email" placeholder="Email" />
          <GeneralInput title="Password" placeholder="Password" secret />
        </View>
        <View>
          <GeneralButton title="Iniciar sesión" color="primary"/>
          <GeneralButton title="Iniciar sesión con Facebook" />
        </View>
        <View>
          
        </View>
      </View>
    </>
  );
};
