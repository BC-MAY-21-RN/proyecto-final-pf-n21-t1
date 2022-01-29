import React from 'react';
import {TouchableOpacity} from 'react-native';
import {LinkStyle} from './styled';
import {Color, Size} from '../../../theme/default';

export const GeneralLink = ({size, color, title, action}) => {
  color ? (color = color) : (color = Color.text);

  return (
    <TouchableOpacity onPress={ action}>
      <LinkStyle size={Size[size]} color={Color[color]}>
        {title}
      </LinkStyle>
    </TouchableOpacity>
  );
};
