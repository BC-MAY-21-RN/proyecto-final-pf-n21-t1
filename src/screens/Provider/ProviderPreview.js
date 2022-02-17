import React from 'react';
import {Container, ContainerWhite} from '../../components/atoms';
import {CardOrganism} from '../../components/organisms';

export const ProviderPreview = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <CardOrganism navigation={navigation} />
      </Container>
    </ContainerWhite>
  );
};
