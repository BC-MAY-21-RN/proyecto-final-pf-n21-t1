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
        color="background"
        weight
        size="h1"
      />
      <ProviderCardDets navigation={navigation} buttonType={buttonType} />
    </>
  );
};
