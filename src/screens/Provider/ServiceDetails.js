import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {ServiceClosure} from '../../components/organisms';

export const ServiceDetails = () => {
  const handleAction = () => {
    console.log('prueba');
  };

  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          title="Detalles de Servicio"
          color="background"
          weight
          size="h1"
          isMenuVisible
          userType="Provider"
        />
        <ServiceClosure servicio={'Fontanero'} action={handleAction} fin />
      </Container>
    </ContainerWhite>
  );
};
