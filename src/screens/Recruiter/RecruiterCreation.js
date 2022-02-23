import React from 'react';
import {Container, GeneralButton} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';

export const RecruiterCreation = ({navigation}) => {
  return (
    <Container>
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
  );
};
