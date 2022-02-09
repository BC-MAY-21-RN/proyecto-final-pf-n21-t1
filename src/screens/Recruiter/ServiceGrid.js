import React from 'react';
import {Container} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {ServiceComponent} from '../../components/molecules/ServiceComponent';

export const ServiceGrid = navigation => {
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
      <ServiceComponent navigation={navigation} />
    </Container>
  );
};
