import React from 'react';
import {GeneralText} from '..';
import {View, StyleSheet} from 'react-native';
import {CenterStatus} from './styled';

export const ServiceStatus = ({status}) => {
  let color = '';
  if (status === 'Servicio Finalizado') {
    color = 'text';
  } else if (status === 'Servicio Aceptado') {
    color = 'primary';
  } else {
    color = 'red';
  }

  return (
    <CenterStatus>
      <GeneralText weight={'bold'} title={status} size={'h3'} color={color} />
    </CenterStatus>
  );
};
