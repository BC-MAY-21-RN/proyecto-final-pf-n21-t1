import React from 'react';
import {HeaderTitle} from './styled';
import Color from '../../../theme/default';

export const GeneralHeader = ({size, title, color}) => {
  color ? (color = color) : (color = Color.text);

  switch (size) {
    case 'h1':
      size = '24px';
      break;
    case 'h2':
      size = '22px';
      break;
    case 'h3':
      size = '20px';
      break;
    case 'h4':
      size = '18px';
      break;
  }

  return <HeaderTitle size={size} color={Color[color]} title={title} />;
};
