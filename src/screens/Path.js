import React from 'react';
import {GeneralLink, GeneralText} from '../components/atoms';
import {GeneralHeader} from '../components/molecules/GeneralHeader';
import {View, StyleSheet} from 'react-native';
import buttonsMapping from '../utils/buttonsMapping';

const buttonsRender = navigation => {
  const generalButtons = [
    {
      title: 'Solucionar un problema en mi hogar',
      color: 'primary',
      icon: 'home',
      action: () => navigation.navigate('Login'),
    },
    {
      title: 'Ofrecer servicios de mantenimiento',
      color: 'secondary',
      icon: 'hammer',
      action: () => navigation.navigate('Login'),
    },
  ];
  return buttonsMapping(generalButtons);
};

export const Path = navigation => {
  return (
    <View style={styles.totalScreen}>
      <GeneralHeader isMenuVisible />
      <View style={styles.screen2}>
        <GeneralText
          title="¿Que te trae hoy por aqui?"
          weight="bold"
          size="h1"
          color="secondary"
        />
        <View style={styles.buttons}>{buttonsRender(navigation)}</View>
        <GeneralLink weight title="Cerrar sesión" size="h5" color="secondary" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  totalScreen: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  screen2: {
    height: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttons: {
    height: '25%',
    justifyContent: 'space-around',
  },
});
