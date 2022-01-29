import React from 'react';
import {AppText} from './styled';
import {Color, Size} from '../../../theme/default';

export const GeneralText = ({size, color, title}) => {
  color ? (color = Color[color]) : (color = Color.text);

  return (
    <AppText size={Size[size]} color={color}>
      {title}
    </AppText>
  );
};
