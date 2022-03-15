import React from 'react';
import {Services} from '../../components/organisms';
import {Container, ContainerWhite} from '../../components/atoms';
import {SafeAreaView} from 'react-native';

export const ServicesHistory = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <Services navigation={navigation} />
      </Container>
    </ContainerWhite>
  );
};
