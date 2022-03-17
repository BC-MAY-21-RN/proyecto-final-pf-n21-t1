import React from 'react';
import buttonsMapping from '../../../utils/buttonsMapping';
import {ButtonCardContainer, CardButton} from './styled';

const getButtons = type => {
  if (type === 'ProviderCardData') {
    return [
      {
        title: 'Contratar',
        screen: 'DateSelection',
      },
      {
        title: 'Chatea conmigo',
        screen: 'DateSelection',
        disabled: true,
      },
    ];
  } else {
    return [
      {
        title: 'Mis servicios',
        screen: 'UpcomingServices',
      },
      {
        title: 'Editar perfil',
        screen: 'EditProvider',
      },
    ];
  }
};

export const CardButtons = ({type, navigation, data}) => {
  const buttons = getButtons(type);
  const cardButtons = [
    {
      title: buttons[0].title,
      color: 'primary',
      action: () => navigation.navigate(buttons[0].screen, {data}),
    },
    {
      title: buttons[1].title,
      action: () => navigation.navigate(buttons[1].screen),
      disabled: buttons[1]?.disabled,
    },
  ];
  return (
    <ButtonCardContainer>
      <CardButton>{buttonsMapping(cardButtons)}</CardButton>
    </ButtonCardContainer>
  );
};
