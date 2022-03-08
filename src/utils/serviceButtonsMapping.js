import React from 'react';
import {GeneralContainer, GeneralText} from '../components/atoms';
import {
  ServiceImage,
  Touchable,
  ServiceTitle,
} from '../components/molecules/ServiceComponent/styled';

export default function ServiceButtonMapping(serviceButtonsData, navigation) {
  const serviceButtons = serviceButtonsData.map((service, index) => {
    return (
      <Touchable
        onPress={() =>
          navigation.navigate('ServiceProviders', {
            title: service.serviceTitle,
          })
        }
        key={index}>
        <GeneralContainer width={'90%'} height={'20%'} marginBottom={'20%'}>
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
