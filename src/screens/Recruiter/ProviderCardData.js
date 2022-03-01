import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms/index.js';
import {CardOrganism} from '../../components/organisms/index.js';

export const ProviderCardData = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <CardOrganism
          navigation={navigation}
          buttonType={'ProviderCardData'}
          userType="Recruiter"
        />
      </Container>
    </ContainerWhite>
  );
};
