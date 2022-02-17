import React from 'react';
import {Container, ContainerWhite} from '../../components/atoms/index.js';
import {CardOrganism} from '../../components/organisms/index.js';

export const ProviderCardData = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <CardOrganism navigation={navigation} buttonType={'ProviderCardData'} />
      </Container>
    </ContainerWhite>
  );
};
