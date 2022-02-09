import React from 'react';
import {AppText, TextContainer} from './styled';
import {Color, Size} from '../../../theme/default';
import Icon from 'react-native-vector-icons/Ionicons';

export const GeneralText = ({size, color, title, weight, icon}) => {
  color ? (color = Color[color]) : (color = Color.text);
  const sizeIcon = {
    h1: 24,
    h2: 22,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
  };

  return (
    <TextContainer>
      {icon ? <Icon name={icon} size={sizeIcon[size]} color /> : undefined}
      <AppText size={Size[size]} color={color} weight={weight}>
        {icon ? ' ' : undefined}
        {title}
      </AppText>
    </TextContainer>
  );
};

// Es INDISPENSABLE mandar la prop "weight"aunque esté vacía o si no crashea.
