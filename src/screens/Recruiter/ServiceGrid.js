import React from 'react';
import {Container, ContainerWhite} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {ServiceComponent} from '../../components/molecules/ServiceComponent';

export const ServiceGrid = navigation => {
  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader
          isTabRendered
          isMenuVisible
          title="Servicios para tu hogar"
          color="background"
          weight
          size="h1"
          userType="Recruiter"
        />
        <ServiceComponent navigation={navigation} />
      </Container>
    </ContainerWhite>
  );
};
