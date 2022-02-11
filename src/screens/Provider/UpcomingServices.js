import React from 'react';
import { Text } from 'react-native';
import {
  AcceptDeclineBtns,
  GeneralHeader,
  ServiceGeneralCard,
} from '../../components/molecules';
import { Container } from '../../components/atoms';
import { ScrollView } from 'react-native';

export const UpcomingServices = () => {
  return (
    <Container>
      <GeneralHeader
        isTabRendered
        title='Servicios Pendientes'
        color='background'
        weight
        size='h1'
        isMenuVisible
      />
      <ScrollView>
        {/* AQUI DEBE IR CON MAPPING CON LAS LECTURAS A FIREBASE Y QUE SE GENEREN LOS UPCOMINGSERVICECOMPONENTYS NECESARIOS */}
  
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
  );
};
