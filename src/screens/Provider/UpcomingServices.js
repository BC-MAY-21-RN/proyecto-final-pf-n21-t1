import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {Services} from '../../components/organisms';

export const UpcomingServices = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <Services navigation={navigation} provider />
      </Container>
    </ContainerWhite>
  );
};
