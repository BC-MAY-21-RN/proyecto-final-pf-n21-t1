import React from 'react';
import {Container, ContainerWhite} from '../../components/atoms';
import {
  GeneralHeader,
  UpcomingServiceComponent,
} from '../../components/molecules';

export const UpcomingServices = () => {
  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader
          isTabRendered
          title="Servicios Pendientes"
          color="background"
          weight
          size="h1"
          isMenuVisible
        />
        <UpcomingServiceComponent servicio={'Fontanero'} />
      </Container>
    </ContainerWhite>
  );
};
