import React from 'react';
import {Container, ContainerWhite, GeneralText} from '../components/atoms';
import {GeneralHeader} from '../components/molecules/GeneralHeader';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import buttonsMapping from '../utils/buttonsMapping';
import {LinkContainer} from '../components/molecules';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const providerValidation = navigation => {
  firestore()
    .collection('Users')
    .doc(auth().currentUser.uid)
    .get()
    .then(documentSnapshot => {
      documentSnapshot.data().providerRegistered === 'true'
        ? navigation.navigate('UpcomingServices')
        : navigation.navigate('ProviderCreation');
    });
};

const recruiterValidation = navigation => {
  firestore()
    .collection('Users')
    .doc(auth().currentUser.uid)
    .get()
    .then(documentSnapshot => {
      documentSnapshot.data().providerRegistered === 'true'
        ? navigation.navigate('ServiceGrid')
        : navigation.navigate('RecruiterCreation');
    });
};

const buttonsRender = navigation => {
  const generalButtons = [
    {
      title: 'Solucionar un problema en mi hogar',
      color: 'primary',
      icon: 'home',
      size: 330,
      action: () => recruiterValidation(navigation),
    },
    {
      title: 'Ofrecer servicios de mantenimiento',
      color: 'secondary',
      icon: 'hammer',
      size: 330,
      action: () => providerValidation(navigation),
    },
  ];
  return buttonsMapping(generalButtons);
};

export const Path = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          title="Bienvenido"
          color="background"
          weight
          size="h1"
          navigation={navigation}
        />
        <View style={styles.screen2}>
          <GeneralText
            title="¿Qué deseas hacer?"
            weight="bold"
            size="h1"
            color="secondary"
          />
          <View style={styles.buttons}>{buttonsRender(navigation)}</View>
          <LinkContainer navigation={navigation} type="Logout" />
        </View>
      </Container>
    </ContainerWhite>
  );
};
const styles = StyleSheet.create({
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
