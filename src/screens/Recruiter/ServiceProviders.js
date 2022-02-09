import React from 'react';
import {TouchableOpacity} from 'react-native';
import {jose} from '../../assets/images';
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
            name={'José Rodríguez'}
            number={'3123100157'}
            zone={'Colima y VdeA'}
            image={jose}
          />
        </GeneralContainer>
      </TouchableOpacity>
    </>
  );
};
