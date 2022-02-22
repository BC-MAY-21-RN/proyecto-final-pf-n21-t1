import React from 'react';
import {Button} from 'react-native-elements';
import {Color} from '../../../theme/default';
import Icon from 'react-native-vector-icons/Ionicons';

export const GeneralButton = ({
  width,
  height,
  title,
  color,
  icon,
  action,
  disabled,
}) => {
  height ? (height = height) : (height = 55);
  width ? (width = width) : (width = 350);
  color ? (color = Color[color]) : (color = Color.secondary);

  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: color,
    borderRadius: 8,
  };

  return (
    <Button
      buttonStyle={buttonStyle}
      title={title}
      icon={icon ? <Icon name={icon} size={15} color="#ffff" /> : undefined}
      onPress={action}
      disabled={disabled}
    />
  );
};
