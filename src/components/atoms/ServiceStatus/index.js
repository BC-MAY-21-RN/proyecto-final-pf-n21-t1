import React from 'react';
import { GeneralText } from '..';
import { View, StyleSheet } from 'react-native';
import { CenterStatus } from './styled';

export const ServiceStatus = ({ status }) => {
  let color = '';
  if (status ==='SERVICIO FINALIZADO'){
    color='text'}else if (status==='SERVICIO ACEPTADO'){
      color='primary'}else{
        color='red'
      }
  return (
    <CenterStatus>
      <GeneralText
        weight={'bold'}
        title={status}
        size={'h1'}
        color={color}
      />
    </CenterStatus>
  );
};
