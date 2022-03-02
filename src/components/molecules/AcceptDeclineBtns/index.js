import React from 'react';
import { Alert } from 'react-native';
import buttonsMapping from '../../../utils/buttonsMapping';
import { ButtonGroup, ButtonStyles } from './styled';

export const AcceptDeclineBtns = ({ setServAceptado, setMostrarBotones }) => {
  const buttonsData = [
    {
      title: 'Aceptar',
      color: 'primary',
      action: () => {
        setServAceptado(false);
        setMostrarBotones(false);
      },
      width: 100,
      height: 37,
    },
    {
      title: 'Declinar',
      color: 'secondary',
      action: () =>
        Alert.alert(
          'Declinar',
          '¿Estas seguro de que quieres declinar este servicio?',
          [
            { text: 'Si', onPress: () => console.log('Servicio declinado') },
            { text: 'No' },
          ],
          { cancelable: true }
        ),
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
