import React from 'react';
import {Rating} from 'react-native-elements';

export const StarRating = ({
  quantity,
  readBoolean,
  startValue,
  backgroundColor,
}) => {
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
      tintColor={backgroundColor}
    />
  );
};
