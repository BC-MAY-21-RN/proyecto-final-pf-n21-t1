import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {GeneralText, StarRating} from '../../atoms';
import {
  AvatarImg,
  ImgContainer,
  InfoContainer,
  NumberRow,
  StarsContainer,
} from './styled';

export const ProviderCard = ({name, number, zone, image}) => {
  return (
    <>
      <ImgContainer>
        <AvatarImg source={image} />
      </ImgContainer>
      <InfoContainer>
        <GeneralText title={name} size="h3" color="secondary" weight />
        <NumberRow>
          <Icon name="call-outline" size={20} />
          <GeneralText title={number} size="h4" color="text" />
        </NumberRow>
        <GeneralText title={zone} size="h4" color="text" />
        <StarRating quantity={5} readBoolean={true} startValue={5} />
      </InfoContainer>
    </>
  );
};
