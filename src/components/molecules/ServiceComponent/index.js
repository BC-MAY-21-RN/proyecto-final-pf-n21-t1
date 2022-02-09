import React from 'react';
import {ServiceButtons} from './styled';
import ServiceButtonMapping from '../../../utils/serviceButtonsMapping';
import serviceButtonsData from './serviceButtonsData';


export const ServiceComponent = navigation => {
  /*   let serviceButtonsData = [];
  for (let i = 0; i < 6; i++) {
    serviceButtonsData.push({
      width: '40%',
      height: '20%',
      marginBottom: '10%',
      serviceTitle: 'Escoga su servicio',
      action: () => navigation.navigate('Login'),
    });
  } */

  return (
    <ServiceButtons>
      {ServiceButtonMapping(serviceButtonsData, navigation)}
    </ServiceButtons>
  );
};
