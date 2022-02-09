import React from 'react';
import {Container} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';

export const ServiceGrid = () => {
  return (
    <Container>
      <GeneralHeader
        isTabRendered
        isMenuVisible
        title="Servicios para tu hogar"
        color="background"
        weight
        size="h1"
      />
    </Container>
  );
};
