import React from 'react';
import buttonsMapping from '../../../utils/buttonsMapping'
import {ButtonGroup, ButtonStyles} from './styled';

export const AcceptDeclineBtns = () => {
  const generalButtons = [
    {
      title: 'Accept',
      color: 'primary',
      action: () => console.log("Aceptaste :)"),
      size: 100,
    },
    {
      title: 'Decline',
      color: 'secondary',
      action: () => console.log("Declinaste :("),
      size: 100,
    },
  ];
  return (
    <ButtonGroup>
      <ButtonStyles>{buttonsMapping(generalButtons)}</ButtonStyles>
    </ButtonGroup>
  );
};
