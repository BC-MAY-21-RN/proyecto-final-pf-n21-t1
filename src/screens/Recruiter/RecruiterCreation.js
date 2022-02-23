import React from 'react';
import { SafeAreaView } from 'react-native';
import {Container, ContainerWhite, GeneralButton} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';

export const RecruiterCreation = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          title="Tarjeta de presentación"
          isTabRendered
          size="h1"
          color="background"
          weight
        />
        <GeneralButton
          title="Empezar"
          color="secondary"
          action={() => navigation.navigate('ServiceGrid')}
        />
      </Container>
    </ContainerWhite>
  );
};
