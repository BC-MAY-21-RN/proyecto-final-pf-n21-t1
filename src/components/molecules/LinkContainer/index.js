import React from 'react';
import {GeneralLink} from '../../atoms';
import {LinkBox} from './styled';

export const LinkContainer = ({type, navigation}) => {
  const linkType = {
    Login: '¿Ya eres usuario? Inicia sesión',
    Register: '¿Eres nuevo aquí? Regístrate',
    Logout: 'Cerrar sesión',
  };
  const action = () =>
    navigation.reset({
      index: 0,
      routes: [{name: type === 'Logout' ? 'Login' : type}],
    });

  return (
    <LinkBox>
      <GeneralLink
        title={linkType[type]}
        size="h5"
        color="secondary"
        action={action}
      />
    </LinkBox>
  );
};
