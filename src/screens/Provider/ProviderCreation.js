import React from 'react';
import {View} from 'react-native';
import {GeneralInput, GeneralText, GeneralPicker} from '../../components/atoms';

export const ProviderCreation = () => {
  const data = [
    {
      value: 0,
      label: 'Prueba',
    },
  ];
  return (
    <View>
      <GeneralText title="Servicios" size="h4" />
      <GeneralPicker data={data} />
      <GeneralInput title="Telefono celular" placeholder="1234567890" />
      <GeneralInput
        title="Notas importantes"
        placeholder="Trabajo días festivos..."
      />
    </View>
  );
};
