import React from 'react';
import buttonsMapping from '../../../utils/buttonsMapping';
import {ButtonContainer, ButtonStyle} from './styled';

export const SignButtons = ({type, navigation}) => {
  const generalButtons = [
    {
      title: type === 'login' ? 'Iniciar sesión' : 'Registrarse',
      color: 'primary',
      action: () => navigation.navigate('Path'),
    },
    {
      title:
        type === 'login'
          ? 'Iniciar sesión con Facebook'
          : 'Registrarse con Facebook',
      color: 'facebook',
      icon: 'logo-facebook',
    },
  ];
  return (
    <ButtonContainer>
      <ButtonStyle>{buttonsMapping(generalButtons)}</ButtonStyle>
    </ButtonContainer>
  );
};
