import React from 'react';
import {AppText} from './styled';
import {Color, Size} from '../../../theme/default';

export const GeneralText = ({size, color, title}) => {
  color ? (color = color) : (color = Color.text);

  return (
    <AppText size={Size[size]} color={Color[color]}>
      {title}
    </AppText>
  );
};
