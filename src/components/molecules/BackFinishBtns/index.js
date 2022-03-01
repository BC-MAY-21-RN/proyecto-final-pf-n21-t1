import React from 'react';
import { Alert } from 'react-native';
import buttonsMapping from '../../../utils/buttonsMapping';
import { Group, Styles } from './styled';
import { useNavigation } from '@react-navigation/native';

export const BackFinishBtns = () => {
  const navigation = useNavigation();
  const buttonsData = [
    {
      title: 'Finalizar ',
      color: 'red',
      action: () => Alert.alert(
        'Finalizar Servicio',
        '¿Estas seguro de que terminaste este servicio?',
        [
          { text: 'Si', onPress: () => navigation.navigate('UpcomingServices') },
          { text: 'No' },
        ],
      ),
      width: 99,
      height: 35,
    },
    {
      title: 'Volver',
      color: 'secondary',
      action: () => navigation.navigate('UpcomingServices'),
      width: 99,
      height: 35,
    },
  ];
  return (
    <Group>
      <Styles>{buttonsMapping(buttonsData)}</Styles>
    </Group>
  );
};
