import React from 'react';
import {TouchableOpacity} from 'react-native';
import {GeneralText, StarRating} from '../../atoms';
import {OneStarPosition, TextPosition} from './styled';

export const OneStarButton = ({setModalVisible}) => {
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <OneStarPosition>
        <StarRating
          quantity={1}
          startValue={1}
          readBoolean={true}
          backgroundColor={'hover'}
        />
      </OneStarPosition>
      <TextPosition>
        <GeneralText color="secondary" weight title={'Calificar'} size={'h7'} />
      </TextPosition>
    </TouchableOpacity>
  );
};
