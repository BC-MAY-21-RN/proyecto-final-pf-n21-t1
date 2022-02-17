import React from 'react';
import buttonsMapping from '../../../utils/buttonsMapping';
import {ButtonContainer, ButtonStyle} from './styled';

export const SignButtons = ({type, navigation, disabled, action, actionGoogle}) => {
  const generalButtons = [
    {
      title: type === 'login' ? 'Iniciar sesión' : 'Registrarse',
      color: 'primary',
      action,
      disabled,
    },
    {
      title:
        type === 'login'
          ? 'Iniciar sesión con Google'
          : 'Registrarse con Google',
      color: 'facebook',
      icon: 'logo-google',
      action: actionGoogle,
    },
  ];
  return (
    <ButtonContainer>
      <ButtonStyle>{buttonsMapping(generalButtons)}</ButtonStyle>
    </ButtonContainer>
  );
};
