import React from 'react';
import {View} from 'react-native';
import buttonsMapping from '../../../utils/buttonsMapping';

export const SignButtons = ({type, navigation, style}) => {
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
  return <View style={style}>{buttonsMapping(generalButtons)}</View>;
};
