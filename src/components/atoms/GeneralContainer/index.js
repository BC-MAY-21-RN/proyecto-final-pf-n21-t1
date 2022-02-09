import React from 'react';
import {ContainerGeneral} from './styled';

export const GeneralContainer = ({
  width,
  height,
  direction,
  children,
  marginBottom,
}) => {
  width ? (width = width) : (width = '100%');
  height ? (height = height) : (height = '20%');
  marginBottom ? (marginBottom = marginBottom) : (marginBottom = '0%');

  return (
    <ContainerGeneral
      width={width}
      height={height}
      direction={direction}
      marginBottom={marginBottom}>
      {children}
    </ContainerGeneral>
  );
};
