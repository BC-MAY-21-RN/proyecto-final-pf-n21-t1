import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../theme/default';

export const StarButton = ({filled, id}) => {
  const star = filled ? 'star' : 'star-outline';

  return (
    <>
      <TouchableOpacity id>
        <Icon name={star} size={40} color={Color.secondary} />
      </TouchableOpacity>
    </>
  );
};
