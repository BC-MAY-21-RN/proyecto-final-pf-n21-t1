import React from 'react';
import {Button} from 'react-native-elements';
import Color from '../../../theme/default';

export const GeneralButton = ({size, title, color, icon}) => {
  size ? (size = size) : (size = 300);

  const buttonStyle = {
    width: size,
    backgroundColor: Color[color],
    borderRadius: 8,
  };

  return <Button buttonStyle={buttonStyle} title={title} icon={icon} />;
};
