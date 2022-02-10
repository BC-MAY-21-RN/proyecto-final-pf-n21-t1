import React from 'react';
import {GeneralContainer, GeneralText} from '../components/atoms';
import {
  ServiceImage,
  Touchable,
} from '../components/molecules/ServiceComponent/styled';
import {StyleSheet} from 'react-native';

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
/* 
const styles = StyleSheet.create({
  touchable: {
    width: '50%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.2)', //Adri favor de quitarselo si se ve feo
  },
});
 */
