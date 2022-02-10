import React from 'react';
import {Text} from 'react-native';
import { AcceptDeclineBtns, GeneralHeader, UpcomingServiceComponent } from '../../components/molecules';

export const UpcomingServices = () => {
  return (
    <>
      <GeneralHeader
        isTabRendered
        title="Servicios Pendientes"
        color="background"
        weight
        size="h1"
        isMenuVisible
      />
      <UpcomingServiceComponent
        servicio={"Fontanero"}
      />
    </>
  );
};
