import React from 'react';
import {HeaderTitle} from './styled';
import {Color, Size} from '../../../theme/default';

export const GeneralHeader = ({size, title, color}) => {
  color ? (color = color) : (color = Color.text);

  return (
    <HeaderTitle size={Size[size]} color={Color[color]}>
      {title}
    </HeaderTitle>
  );
};
