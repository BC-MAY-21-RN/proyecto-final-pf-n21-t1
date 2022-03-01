import React from 'react';
import {ServiceButtons} from './styled';
import serviceButtonMapping from '../../../utils/serviceButtonsMapping';
import serviceButtonsData from './serviceButtonsData';

export const ServiceComponent = ({navigation}) => {
  const serviceButtons = serviceButtonsData();

  return (
    <ServiceButtons>
      {serviceButtonMapping(serviceButtons, navigation)}
    </ServiceButtons>
  );
};
