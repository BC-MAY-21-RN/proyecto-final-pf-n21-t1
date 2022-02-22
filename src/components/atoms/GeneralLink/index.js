import React from 'react';
import {TouchableOpacity} from 'react-native';
import {GeneralText} from '..';

export const GeneralLink = ({size, color, title, action, weight}) => {
  return (
    <TouchableOpacity onPress={action}>
      <GeneralText size={size} color={color} weight={weight} title={title} />
    </TouchableOpacity>
  );
};
