import React from 'react';
import {MarginView} from '../../../screens/styled';
import {GeneralPicker, GeneralText} from '../../atoms';

export const ServicePicker = ({service, setService}) => {
  const data = [
    {
      value: 'Fontanería',
      label: 'Fontanería',
    },
    {
      value: 'Construcción',
      label: 'Construcción',
    },
    {
      value: 'Técnico',
      label: 'Técnico',
    },
    {
      value: 'Electricista',
      label: 'Electricista',
    },
    {
      value: 'Carpintero',
      label: 'Carpintero',
    },
    {
      value: 'Pintor',
      label: 'Pintor',
    },
  ];
  return (
    <>
      <MarginView>
        <GeneralText
          title="¿Qué servicio deseas proveer?"
          size="h2"
          color={'primary'}
          weight={'bold'}
        />
      </MarginView>
      <GeneralPicker data={data} selected={service} setSelected={setService} />
    </>
  );
};
