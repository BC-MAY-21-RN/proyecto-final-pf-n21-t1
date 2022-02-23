import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Container, ContainerWhite} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import { SafeAreaView } from 'react-native-safe-area-context';

export const EditProvider = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          title="Edita tu perfil"
          isMenuVisible
          isTabRendered
          size="h1"
          color="background"
          weight
          userType="Provider"
        />
      </Container>
    </ContainerWhite>
  );
};
