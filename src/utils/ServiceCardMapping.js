import React from 'react';
import { GeneralText } from '../components/atoms';

export default function ServiceCardMapping(serviceCardData) {
  const serviceText = serviceCardData.map((service, index) => {
    return (
      <GeneralText
        key={index}
        title={service.title}
        weight
        size={service.size}
        color={service.color}
      />
    );
  });
  return serviceText;
}
