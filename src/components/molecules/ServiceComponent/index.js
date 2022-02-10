import React from 'react';
import {ServiceButtons} from './styled';
import ServiceButtonMapping from '../../../utils/serviceButtonsMapping';
import serviceButtonsData from './serviceButtonsData';

export const ServiceComponent = ({navigation}) => {
  const serviceButtons = serviceButtonsData(navigation);

  return (
    <ServiceButtons>{ServiceButtonMapping(serviceButtons)}</ServiceButtons>
  );
};
