import React from 'react';
import {ProviderCardDets} from '..';
import {GeneralHeader} from '../../molecules';

export const CardOrganism = ({navigation, buttonType}) => {
  return (
    <>
      <GeneralHeader />
      <ProviderCardDets navigation={navigation} buttonType={buttonType} />
    </>
  );
};
