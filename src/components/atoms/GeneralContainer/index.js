import React from 'react';
import {ContainerGeneral} from './styled';
import {Text} from 'react-native';
export const GeneralContainer = ({width, height, children}) => {
  width ? (width = width) : (width = '100%');
  height ? (height = height) : (height = '20%');

  return (
    <ContainerGeneral width={width} height={height}>
      {children}
    </ContainerGeneral>
  );
};
