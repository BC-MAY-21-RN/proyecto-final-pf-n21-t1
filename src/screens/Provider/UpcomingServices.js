import React from 'react';
import {GeneralHeader, ServiceGeneralCard, UpcomingServiceComponent, AcceptDeclineBtns} from '../../components/molecules';
import {ScrollView} from 'react-native';
import { Container, ContainerWhite } from '../../components/atoms';

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
          userType="Provider"
          />
        <ScrollView>
          <ServiceGeneralCard servicio={'Fontanero'} botones />
          <ServiceGeneralCard servicio={'Fontanero'} botones />
          <ServiceGeneralCard servicio={'Fontanero'} botones />
          <ServiceGeneralCard servicio={'Fontanero'} botones />
          <ServiceGeneralCard servicio={'Fontanero'} botones />
          <ServiceGeneralCard servicio={'Fontanero'} botones />
          <ServiceGeneralCard servicio={'Fontanero'} botones />
          <ServiceGeneralCard servicio={'Fontanero'} botones />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
