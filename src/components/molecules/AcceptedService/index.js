import {View, Text} from 'react-native';
import React from 'react';
import {GeneralButton, GeneralText} from '../../atoms';
import {Position} from './styled';
import {useNavigation} from '@react-navigation/native';

export const AcceptedService = ({uid}) => {
  const navigation = useNavigation();

  return (
    <Position>
      <GeneralText
        title={'Servicio Aceptado  '}
        color={'primary'}
        size={'h5'}
        weight
      />
      <GeneralButton
        title={'Detalles'}
        action={() => navigation.navigate('ServiceDetails', {uid: uid})}
        width={'80%'}
        height={'90%'}
        color={'primary'}
      />
    </Position>
  );
};
