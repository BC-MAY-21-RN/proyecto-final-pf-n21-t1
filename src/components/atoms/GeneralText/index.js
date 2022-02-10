import React from 'react';
import {AppText} from './styled';
import {Color, Size} from '../../../theme/default';

export const GeneralText = ({size, color, title, weight, alignSelf}) => {
  color ? (color = Color[color]) : (color = Color.text);

  return (
    <AppText
      size={Size[size]}
      color={color}
      weight={weight}
      alignSelf={alignSelf}>
      {title}
    </AppText>
  );
};

// Es INDISPENSABLE mandar la prop "weight"aunque esté vacía o si no crashea.
