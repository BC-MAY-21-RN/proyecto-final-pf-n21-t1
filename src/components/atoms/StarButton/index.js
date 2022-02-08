import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../theme/default';
import {StarOpacity} from './styled';

export const StarButton = ({filled}, props) => {
  const star = filled ? 'star' : 'star-outline';
  const handlePress = () => {
    console.log('hola');
  };
  return (
    <StarOpacity onPress={handlePress}>
      <Icon name={star} size={40} color={Color.secondary} />
    </StarOpacity>
  );
};
