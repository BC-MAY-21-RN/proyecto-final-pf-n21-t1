import React from 'react';
import {GeneralButton} from '../components/atoms';
import Icon from 'react-native-vector-icons/Ionicons';

export default function buttonsMapping(generalButtons) {
  const buttons = generalButtons.map(
    (
      button,
      index, //button=item
    ) => {
      const spaceText = button.icon ? '  ' : '';
      return (
        <GeneralButton
          key={index}
          title={spaceText + button.title}
          color={button.color}
          icon={<Icon name={button.icon} size={15} color="#ffff" />}
        />
      );
    },
  );
  return buttons;
}
