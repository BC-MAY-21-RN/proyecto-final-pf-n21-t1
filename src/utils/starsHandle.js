import React from 'react';
import {View} from 'react-native';
import {StarButton} from '../components/atoms';

export default function starsHandle() {
  var stars = [];
  for (var i = 0; i < 5; i++) {
    stars.push(<StarButton key={`star-${i}`} />);
  }
  const starsMap = stars.map((button, index) => {
    return <StarButton key={index} filled />;
  });
  return starsMap;
}
