import React from 'react';
import {ProviderCardDets} from '..';
import {GeneralHeader} from '../../molecules';

export const CardOrganism = ({navigation, buttonType}) => {
  return (
    <>
      <GeneralHeader
        isTabRendered
        isMenuVisible
        title="FONTANERÍA"
        size="h1"
        color="background"
        weight
      />
      <ProviderCardDets navigation={navigation} buttonType={buttonType} />
    </>
  );
};
