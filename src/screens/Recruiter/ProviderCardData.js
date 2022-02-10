import React from 'react';
import {Container} from '../../components/atoms/index.js';
import {CardOrganism} from '../../components/organisms/index.js';

export const ProviderCardData = ({navigation}) => {
  return (
    <Container>
      <CardOrganism navigation={navigation} buttonType={'ProviderCardData'} />
    </Container>
  );
};
