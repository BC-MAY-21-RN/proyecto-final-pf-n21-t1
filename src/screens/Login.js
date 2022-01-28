import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GeneralHeader, GeneralInput} from '../components/atoms';

export const Login = () => {
  return (
    <>
      <SafeAreaView />
      {/* <GeneralHeader title="holaaaaaaaasfskaa" size="h1" color="secondary" /> */}
      <GeneralInput title="TEXTO DE PRUEBA" placeholder="TEXTO DE PRUEBA " />
    </>
  );
};
