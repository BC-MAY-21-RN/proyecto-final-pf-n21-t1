import React from 'react';
import {Text} from 'react-native';
import { GeneralContainer } from '../../components/atoms';
import {GeneralHeader, ProviderCard} from '../../components/molecules';

export const ServiceProviders = () => {
  return(
    <>
      <GeneralHeader 
        isTabRendered
        isMenuVisible
        title="FONTANERÍA"
        color="background"
        weight
        size="h1"
      />
      <ProviderCard
        width="360px"
        height="180px"
        name="José Rodríguez"
        number="312-123-4329"
        zone="Colima y Tecomán"
      />
    </>
  );
};
