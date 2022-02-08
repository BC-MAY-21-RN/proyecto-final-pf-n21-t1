import React from 'react';
import {Rating} from 'react-native-elements';

export const StarRating = ({quantity, readBoolean, startValue}) => {
  const ratingCompleted = rating => {
    console.log('Rating is ' + rating);
  };
  return (
    <Rating
      ratingCount={quantity}
      readonly={readBoolean}
      onFinishRating={ratingCompleted}
      startingValue={startValue}
    />
  );
};
