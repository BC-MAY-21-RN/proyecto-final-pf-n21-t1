import React from 'react';
import buttonsMapping from '../../../utils/buttonsMapping'
import {ButtonGroup, ButtonStyles} from './styled';

export const AcceptDeclineBtns = () => {
  const buttonsData = [
    {
      title: 'Aceptar',
      color: 'primary',
      action: () => console.log("Aceptaste :)"),
      width: 100,
      height: 37,
    },
    {
      title: 'Cancelar',
      color: 'secondary',
      action: () => console.log("Declinaste :("),
      width: 100,
      height: 37,
    },
  ];
  return (
    <ButtonGroup>
      <ButtonStyles>{buttonsMapping(buttonsData)}</ButtonStyles>
    </ButtonGroup>
  );
};
