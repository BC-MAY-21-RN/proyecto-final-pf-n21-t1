import React from 'react';
import {GeneralHeader, ServiceGeneralCard} from '../../components/molecules';
import {Container, ContainerWhite} from '../../components/atoms';
import {SafeAreaView, ScrollView} from 'react-native';

export const ServicesHistory = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          title="Servicios Solicitados "
          color="background"
          weight
          size="h1"
          isMenuVisible
          userType="Recruiter"
          navigation={navigation}
          />
        <ScrollView>
          {/* AQUI DEBE IR CON MAPPING/FLATLIST CON LAS LECTURAS A FIREBASE Y QUE SE GENEREN LOS UPCOMINGSERVICECOMPONENTS NECESARIOS */}
          <ServiceGeneralCard
            servicio={'Fontanero'}
            status={'Servicio Finalizado'} // esto lo recibe como prop y utiliza la cadena "SERVICIO FINALIZADO" para decidir si muestra o no el boton de estrella para calificar.
            navigation={navigation}
            />
          <ServiceGeneralCard
            servicio={'Pintor'}
            status={'Servicio Rechazado'} // esto lo recibe como prop y utiliza la cadena "SERVICIO FINALIZADO" para decidir si muestra o no el boton de estrella para calificar.
            navigation={navigation}
            />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
