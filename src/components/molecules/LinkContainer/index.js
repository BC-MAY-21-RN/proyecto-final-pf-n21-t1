import React from 'react';
import {GeneralLink} from '../../atoms';
import {LinkBox} from './styled';

export const LinkContainer = ({type, navigation, height}) => {
  const linkType = {
    Login: '¿Ya eres usuario? Inicia sesión',
    Register: '¿Eres nuevo aquí? Regístrate',
    Logout: 'Cerrar sesión',
    CustomerOpinions: 'Conoce la opinión de sus clientes',
  };
  const action = () =>
    navigation.reset({
      index: 0,
      routes: [{name: type === 'Logout' ? 'Login' : type}],
    });

  return (
    <LinkBox height={height}>
      <GeneralLink
        title={linkType[type]}
        size="h4"
        color="secondary"
        action={action}
      />
    </LinkBox>
  );
};
