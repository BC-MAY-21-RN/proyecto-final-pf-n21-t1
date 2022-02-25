import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {ServiceComponent} from '../../components/molecules/ServiceComponent';

export const ServiceGrid = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          isMenuVisible
          title="Servicios para tu hogar"
          color="background"
          weight
          size="h1"
          userType="Recruiter"
          navigation={navigation}
        />
        <ServiceComponent navigation={navigation} />
      </Container>
    </ContainerWhite>
  );
};
