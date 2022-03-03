import React from 'react';
import {ContainerGeneral} from './styled';

export const GeneralContainer = props => {
  props.width ? (props.width = props.width) : (props.width = '100%');
  props.height ? (props.height = props.height) : (props.height = '20%');
  props.marginBottom
    ? (props.marginBottom = props.marginBottom)
    : (props.marginBottom = '0%');
  props.border ? (props.border = '1px') : (props.border = '0');
  props.borderColor
    ? (props.borderColor = '#26cbdf')
    : (props.borderColor = null);

  return (
    <ContainerGeneral
      border={props.border}
      borderColor={props.borderColor}
      width={props.width}
      height={props.height}
      direction={props.direction}
      marginBottom={props.marginBottom}
      alignItems={props.alignItems}
      justify={props.justify}>
      {props.children}
    </ContainerGeneral>
  );
};
