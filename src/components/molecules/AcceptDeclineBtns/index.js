import React from 'react';
import {Alert} from 'react-native';
import buttonsMapping from '../../../utils/buttonsMapping';
import {ButtonGroup, ButtonStyles} from './styled';
import firestore from '@react-native-firebase/firestore';

export const AcceptDeclineBtns = ({
  setServAceptado,
  setMostrarBotones,
  uid,
}) => {
  const handleUpdate = btnStatus => {
    firestore()
      .collection('Services')
      .doc(uid)
      .update({status: btnStatus})
      .then(() => {
        if (btnStatus === 'Accepted') {
          setServAceptado(false);
          setMostrarBotones(false);
        }
      });
  };

  const buttonsData = [
    {
      title: 'Aceptar',
      color: 'primary',
      action: () => handleUpdate('Accepted'),
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
            {
              text: 'Si',
              onPress: () => {
                handleUpdate('Decline');
                setMostrarBotones(false);
              },
            },
            {text: 'No'},
          ],
          {cancelable: true},
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
