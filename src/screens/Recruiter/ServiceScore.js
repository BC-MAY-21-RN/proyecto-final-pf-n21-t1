import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StarRating} from '../../components/atoms';

export const ServiceScore = () => {
  return (
    <>
      <SafeAreaView />
      <StarRating quantity={1} readBoolean={true} startValue={1} />
    </>
  );
};
