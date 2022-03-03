import React from 'react';
import {ProviderCardDets} from '..';
import {GeneralHeader} from '../../molecules';

export const CardOrganism = ({navigation, buttonType, userType, data}) => {
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
        navigation={navigation}
      />
      <ProviderCardDets
        navigation={navigation}
        buttonType={buttonType}
        data={data}
      />
    </>
  );
};
