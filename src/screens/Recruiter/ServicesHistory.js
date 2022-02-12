import React from 'react';
import { Text } from 'react-native';
import {
  AcceptDeclineBtns,
  GeneralHeader,
  ServiceGeneralCard,
} from '../../components/molecules';
import { Container } from '../../components/atoms';
import { ScrollView } from 'react-native';

export const ServicesHistory = () => {
  return (
    <Container>
      <GeneralHeader
        isTabRendered
        title='Servicios Solicitados '
        color='background'
        weight
        size='h1'
        isMenuVisible
      />
      <ScrollView>
        {/* AQUI DEBE IR CON MAPPING/FLATLIST CON LAS LECTURAS A FIREBASE Y QUE SE GENEREN LOS UPCOMINGSERVICECOMPONENTS NECESARIOS */}
        <ServiceGeneralCard
          servicio={'Fontanero'}
          status={'SERVICIO FINALIZADO'} // esto lo recibe como prop y utiliza la cadena "SERVICIO FINALIZADO" para decidir si muestra o no el boton de estrella para calificar.
        />
        <ServiceGeneralCard
          servicio={'Fontanero'}
          status={'SERVICIO ACEPTADO'}
        />
        <ServiceGeneralCard
          servicio={'Fontanero'}
          status={'SERVICIO RECHAZADO'}
        />
      </ScrollView>
    </Container>
  );
};
