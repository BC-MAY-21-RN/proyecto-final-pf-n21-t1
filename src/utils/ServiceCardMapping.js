import React from 'react';
import {GeneralText} from '../components/atoms';

export default function ServiceCardMapping(serviceCardData) {
  const serviceText = serviceCardData.map((service, index) => {
    return (
      <GeneralText
        key={index}
        title={service.title}
        weight
        size="h7"
        color="text"
      />
    );
  });
  return serviceText;
}
