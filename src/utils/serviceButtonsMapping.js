import React from 'react';
import {View} from 'react-native';
import {GeneralContainer, GeneralText} from '../components/atoms';
import {
  ServiceImage,
  Touchable,
  ServiceTitle,
} from '../components/molecules/ServiceComponent/styled';

export default function ServiceButtonMapping(serviceButtonsData) {
  const serviceButtons = serviceButtonsData.map((service, index) => {
    return (
      <Touchable onPress={service.toScreen} key={index}>
        <GeneralContainer
          width={service.width}
          height={service.height}
          marginBottom={service.marginBottom}>
          <ServiceImage source={service.icon} />
          <ServiceTitle>
            <GeneralText
              title={service.serviceTitle}
              weight
              size="h4"
              color="secondary"
            />
          </ServiceTitle>
        </GeneralContainer>
      </Touchable>
    );
  });
  return serviceButtons;
}
