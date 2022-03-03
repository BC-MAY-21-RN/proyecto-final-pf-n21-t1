import React from 'react';
import {ContainerGeneral} from './styled';

export const GeneralContainer = props => {
  let {width, height} = props;
  let {marginBottom, border} = props;
  let {borderColor} = props;
  props.width ? (width = props.width) : (width = '100%');
  props.height ? (height = props.height) : (height = '20%');
  marginBottom ? (marginBottom = props.marginBottom) : (marginBottom = '0%');
  border ? (border = '1px') : (border = '0');
  borderColor ? (borderColor = '#26cbdf') : (borderColor = null);

  return (
    <ContainerGeneral
      border={border}
      borderColor={borderColor}
      width={width}
      height={height}
      direction={props.direction}
      marginBottom={marginBottom}
      alignItems={props.alignItems}
      justify={props.justify}>
      {props.children}
    </ContainerGeneral>
  );
};
