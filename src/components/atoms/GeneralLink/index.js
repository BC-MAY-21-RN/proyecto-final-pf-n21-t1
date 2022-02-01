import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Color, Size} from '../../../theme/default';
import {GeneralText} from '..';

export const GeneralLink = ({size, color, title, action}) => {
  color ? (color = Color[color]) : (color = Color.text);

  return (
    <TouchableOpacity onPress={action}>
      <GeneralText size={Size[size]} color={color}>
        {title}
      </GeneralText>
    </TouchableOpacity>
  );
};