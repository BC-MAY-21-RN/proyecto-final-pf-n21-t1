import React from 'react';
import {GeneralButton} from '../components/atoms';

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
          icon={button.icon}
          action={button.action}
        />
      );
    },
  );
  return buttons;
}
