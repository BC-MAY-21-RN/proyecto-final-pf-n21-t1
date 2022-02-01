import React from 'react';
import {GeneralButton, GeneralLink, GeneralText} from '../components/atoms';
import {GeneralHeader} from '../components/molecules/GeneralHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet} from 'react-native';
export const Path = () => {
  return (
    <View style={styles.totalScreen}>
      <GeneralHeader isMenuVisible />
      <View style={styles.screen2}>
        <GeneralText
          title="Estamos felices que estés de regreso."
          weight="bold"
          size="h1"
          color="secondary"
        />
        <View style={styles.buttons}>
          <GeneralButton
            title="  Solucionar un problema en mi Hogar"
            color="primary"
            icon={<Icon name="home" size={15} color="#ffff" />}
          />
          <GeneralButton
            title="  Ofrecer servicios de mantenimiento"
            color="secondary"
            icon={<Icon name="hammer" size={15} color="#ffff" />}
          />
        </View>
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
