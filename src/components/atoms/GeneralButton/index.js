import React from 'react';
import {Button} from 'react-native-elements';
import {Color} from '../../../theme/default';
import Icon from 'react-native-vector-icons/Ionicons';

export const GeneralButton = ({size, title, color, icon, action}) => {
  size ? (size = size) : (size = 300);
  color ? (color = Color[color]) : (color = Color.secondary);

  const buttonStyle = {
    width: size,
    backgroundColor: color,
    borderRadius: 8,
    height: 50,
  };

  return (
    <Button
      buttonStyle={buttonStyle}
      title={title}
      icon={icon ? <Icon name={icon} size={15} color="#ffff" /> : undefined}
      onPress={action}
    />
  );
};
