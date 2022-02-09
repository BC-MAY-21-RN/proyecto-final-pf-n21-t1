import React from 'react';
import {GeneralContainer, GeneralText} from '../components/atoms';
import {ServiceImage} from '../components/molecules/ServiceComponent/styled';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ServiceButtonMapping(serviceButtonsData) {
  const serviceButtons = serviceButtonsData.map(
    (
      service,
      index, //button=item
    ) => {
      return (
        <GeneralContainer
          key={index}
          width={service.width}
          height={service.height}
          marginBottom={service.marginBottom}>
          <TouchableOpacity onPress={service.action}>
            <ServiceImage source={service.icon} />
            <GeneralText
              weight
              title={service.serviceTitle}
              size="h4"
              color="secondary"
            />
          </TouchableOpacity>
        </GeneralContainer>
      );
    },
  );
  return serviceButtons;
}
