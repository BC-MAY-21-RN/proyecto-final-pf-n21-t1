import React from 'react';
import {GeneralContainer, GeneralText} from '../components/atoms';
import {
  ServiceImage,
  Touchable,
} from '../components/molecules/ServiceComponent/styled';

export default function ServiceButtonMapping(serviceButtonsData) {
  const serviceButtons = serviceButtonsData.map(
    (
      service,
      index, //button=item
    ) => {
      return (
        <Touchable
          style={styles.touchable}
          onPress={service.toScreen}
          key={index}>
          <GeneralContainer
            width={service.width}
            height={service.height}
            marginBottom={service.marginBottom}
            alignItems="center">
            <ServiceImage source={service.icon} />
            <GeneralText
              weight
              title={service.serviceTitle}
              size="h4"
              color="secondary"
              alignSelf="center"
            />
          </GeneralContainer>
        </Touchable>
      );
    },
  );
  return serviceButtons;
}
