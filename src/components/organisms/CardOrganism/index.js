import React from 'react';
import {ProviderCardDets} from '..';
import {GeneralHeader} from '../../molecules';

export const CardOrganism = ({navigation, buttonType, userType}) => {
  return (
    <>
      <GeneralHeader
        isTabRendered
        isMenuVisible
        title="FONTANERÍA"
        size="h1"
        color="background"
        weight
        userType={userType}
      />
      <ProviderCardDets navigation={navigation} buttonType={buttonType} />
    </>
  );
};
