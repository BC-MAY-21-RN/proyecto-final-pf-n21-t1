import React from 'react';
import { Container, ContainerWhite } from '../../components/atoms';
import {GeneralHeader, ServiceGeneralCard} from '../../components/molecules';
import {ScrollView} from 'react-native';
import { DetailsOrganism } from '../../components/organisms';


export const ServiceDetails = () => {
  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader
          isTabRendered
          title="Detalles de Servicio"
          color="background"
          weight
          size="h1"
          isMenuVisible
          userType="Provider"
          />
          <DetailsOrganism servicio={'Fontanero'}/>
      </Container>
    </ContainerWhite>
  );
};