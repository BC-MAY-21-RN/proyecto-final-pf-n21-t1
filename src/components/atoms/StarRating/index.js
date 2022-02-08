import React, {useState} from 'react';
import {Rating} from 'react-native-elements';

export const StarRating = () => {
  const ratingCompleted = rating => {
    console.log('Rating is ' + rating);
  };
  return <Rating readonly={false} onFinishRating={ratingCompleted} />;
};
