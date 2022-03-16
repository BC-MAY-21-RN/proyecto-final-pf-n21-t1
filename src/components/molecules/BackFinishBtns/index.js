import React from 'react';
import {Alert} from 'react-native';
import buttonsMapping from '../../../utils/buttonsMapping';
import {Group, Styles} from './styled';
import {useNavigation} from '@react-navigation/native';

const getButtonsData = (navigation, action) => [
  {
    title: 'Finalizar ',
    color: 'facebook',
    action: () =>
      Alert.alert(
        'Finalizar Servicio',
        '¿Estas seguro de que terminaste este servicio?',
        [
          {
            text: 'Si',
            onPress: action,
          },
          {text: 'No'},
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

export const BackFinishBtns = ({action}) => {
  const navigation = useNavigation();
  const buttonsData = getButtonsData(navigation, action);
  return (
    <Group>
      <Styles>{buttonsMapping(buttonsData)}</Styles>
    </Group>
  );
};
