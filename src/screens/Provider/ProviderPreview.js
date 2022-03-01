import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {CardOrganism} from '../../components/organisms';

export const ProviderPreview = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <CardOrganism navigation={navigation} userType="Provider" />
      </Container>
    </ContainerWhite>
  );
};
