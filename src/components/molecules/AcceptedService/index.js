import {View, Text} from 'react-native';
import React from 'react';
import {GeneralButton, GeneralText} from '../../atoms';
import {Position} from './styled';
import {useNavigation} from '@react-navigation/native';

export const AcceptedService = () => {
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
        action={() => navigation.navigate('ServiceDetails')}
        width={'80%'}
        height={'47%'}
        color={'primary'}
      />
    </Position>
  );
};
