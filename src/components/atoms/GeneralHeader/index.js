import React from 'react';
import {Text} from 'react-native';
import {HeaderTitle} from './styled';

export const GeneralHeader = props => {
  return (
    <>
      <HeaderTitle>{props.title}</HeaderTitle>
    </>
  );
};
