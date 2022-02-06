import React from 'react';
import {TouchableOpacity} from 'react-native';
import {GeneralContainer} from '../../components/atoms';
import {GeneralHeader, ProviderCard} from '../../components/molecules';
import {jose} from '../../assets/images';

export const ServiceProviders = () => {
  return (
    <>
      <GeneralHeader
        isTabRendered
        isMenuVisible
        title="FONTANERÍA"
        color="background"
        weight
        size="h1"
      />
      <TouchableOpacity activeOpacity={1}>
        <GeneralContainer width={360} height={180} direction>
          <ProviderCard
            width="360px"
            height="180px"
            name="José Rodríguez"
            number="312-123-4329"
            zone="Colima y Tecomán"
            image={jose}
          />
        </GeneralContainer>
      </TouchableOpacity>
    </>
  );
};
