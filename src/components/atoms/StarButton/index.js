import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../theme/default';

export const StarButton = ({filled}) => {
  const star = filled ? 'star' : 'star-outline';

  return (
    <>
      <Icon name={star} size={40} color={Color.secondary} />
    </>
  );
};
