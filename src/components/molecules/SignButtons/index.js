import React from 'react';
import buttonsMapping from '../../../utils/buttonsMapping';
import {ButtonContainer, ButtonStyle} from './styled';

export const SignButtons = ({type, disabled, action, actionGoogle, height}) => {
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
    <ButtonContainer height={height}>
      <ButtonStyle>{buttonsMapping(generalButtons)}</ButtonStyle>
    </ButtonContainer>
  );
};
