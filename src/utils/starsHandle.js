import React, {useState} from 'react';
import {StarButton} from '../components/atoms';
import {StarsContainer} from '../components/atoms/StarButton/styled';

export default function starsHandle() {
  var stars = [];
  for (var i = 0; i < 5; i++) {
    stars.push(<StarButton key={`star-${i}`} />);
  }
  const starsMap = stars.map((button, index) => {
    return <StarButton key={index} filled />;
  });
  return <StarsContainer>{starsMap}</StarsContainer>;
}
