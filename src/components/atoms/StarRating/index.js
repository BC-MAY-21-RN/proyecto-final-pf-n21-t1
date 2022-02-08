import React from 'react';
import {Rating} from 'react-native-elements';
import {Color} from '../../../theme/default';

export const StarRating = ({quantity, readBoolean, startValue}) => {
  const ratingCompleted = rating => {
    console.log('Rating is ' + rating);
  };
  const aligning = 'flex-start';
  return (
    <Rating
      ratingCount={quantity}
      readonly={readBoolean}
      onFinishRating={ratingCompleted}
      startingValue={startValue}
      imageSize={30}
      style={{alignSelf: aligning}}
      tintColor={Color.hover}
    />
  );
};
