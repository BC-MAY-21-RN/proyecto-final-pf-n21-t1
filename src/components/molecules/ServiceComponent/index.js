import React from 'react';
import {ServiceButtons} from './styled';
import ServiceButtonMapping from '../../../utils/serviceButtonsMapping';
import serviceButtonsData from './serviceButtonsData';

export const ServiceComponent = ({navigation}) => {
  /*  Este es un ejemplo de como evitar el data en caso de que todos los items del data sean iguales:  let serviceButtonsData = [];
  for (let i = 0; i < 6; i++) {
    serviceButtonsData.push({
      width: '40%',
      height: '20%',
      marginBottom: '10%',
      serviceTitle: 'Escoga su servicio',
      action: () => navigation.navigate('Login'),
    });
  } */
  const serviceButtons = serviceButtonsData(navigation);

  return (
    <ServiceButtons>{ServiceButtonMapping(serviceButtons)}</ServiceButtons>
  );
};
