import React from 'react';
import {TouchableOpacity} from 'react-native';
import {GeneralContainer} from '../../components/atoms';
import {GeneralHeader, ProviderCard} from '../../components/molecules';
import {Color} from '../../theme/default';

export const ServiceProviders = () => {
  return (
    <>
      <GeneralHeader />
      <TouchableOpacity activeOpacity={1}>
        <GeneralContainer width="360px" height="180px" direction>
          <ProviderCard
            width="360px"
            height="180px"
            backgroundColor={Color.hover}
          />
        </GeneralContainer>
      </TouchableOpacity>
    </>
  );
};
