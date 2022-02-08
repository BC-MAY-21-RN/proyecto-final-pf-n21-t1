import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StarButton} from '../../components/atoms';
import starsHandle from '../../utils/starsHandle';

export const ServiceScore = () => {
  return (
    <>
      <SafeAreaView />
      {starsHandle()}
    </>
  );
};
