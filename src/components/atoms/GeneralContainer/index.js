import React from 'react';
import {ContainerGeneral} from './styled';

export const GeneralContainer = ({
  width,
  height,
  direction,
  children,
  marginBottom,
  alignItems,
  border,
  borderColor,
  justify,
}) => {
  width ? (width = width) : (width = '100%');
  height ? (height = height) : (height = '20%');
  marginBottom ? (marginBottom = marginBottom) : (marginBottom = '0%');
  border ? (border = '1px') : (border = '0');
  borderColor ? (borderColor = '#26cbdf') : (borderColor = null);

  return (
    <ContainerGeneral
      border={border}
      borderColor={borderColor}
      width={width}
      height={height}
      direction={direction}
      marginBottom={marginBottom}
      alignItems={alignItems}
      justify={justify}>
      {children}
    </ContainerGeneral>
  );
};
