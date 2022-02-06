import React from 'react';
import buttonsMapping from '../../../utils/buttonsMapping';
import {ButtonCardContainer, CardButton} from './styled';

export const CardButtons = ({type, navigation}) => {
  const cardButtons = [
    {
      title: type === 'ProviderCardData' ? 'Contratar' : 'Crear registro',
      color: 'primary',
      action: () =>
        navigation.navigate(
          type === 'ProviderCardData' ? 'DateSelection' : 'UpcomingServices',
        ),
    },
    {
      title: type === 'ProviderCardData' ? 'Chatea conmigo' : 'Editar',
      color: 'secondary',
    },
  ];
  return (
    <ButtonCardContainer>
      <CardButton>{buttonsMapping(cardButtons)}</CardButton>
    </ButtonCardContainer>
  );
};