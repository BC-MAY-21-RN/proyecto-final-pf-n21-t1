import React from 'react';
import {GeneralButton, GeneralLink, GeneralText} from '../components/atoms';
import {GeneralHeader} from '../components/molecules/GeneralHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet} from 'react-native';

export const Path = () => {
  const generalButtons = [
    {
      title: 'Solucionar un problema en mi hogar',
      color: 'primary',
      icon: 'home',
    },
    {
      title: 'Ofrecer servicios de mantenimiento',
      color: 'secondary',
      icon: 'hammer',
    },
  ];
  const buttons = generalButtons.map(button => (
    <GeneralButton
      title={' ' + button.title}
      color={button.color}
      icon={<Icon name={button.icon} size={15} color="#ffff" />}
    />
  ));

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
        <View style={styles.buttons}>{buttons}</View>
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
