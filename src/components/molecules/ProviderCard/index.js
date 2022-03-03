import React, { useState } from 'react';
import {Avatar} from 'react-native-elements';
import { ImageDetails } from '..';
import {GeneralText, ImageButton, StarRating} from '../../atoms';
import {AvatarImg, CardOpacity, ImgContainer, InfoContainer} from './styled';

export const ProviderCard = ({
  name,
  number,
  zone,
  image,
  backgroundColor,
  navigation,
}) => {
  const handleCardPress = () => {
    navigation ? navigation.navigate('ProviderCardData') : null;
  };
  const [userImage, setuserImage] = useState(image);
  return (
    <CardOpacity activeOpacity={1} onPress={handleCardPress}>
      <ImgContainer>
        <ImageButton image={userImage} setImage={setuserImage} noEdit />
      </ImgContainer>
      <InfoContainer>
        <GeneralText title={name} size="h3" color="secondary" weight />
        <GeneralText
          title={number}
          size="h4"
          color="text"
          icon="call-outline"
        />
        <GeneralText title={zone} size="h4" color="text" />
        <StarRating
          quantity={5}
          readBoolean={true}
          startValue={4}
          backgroundColor={backgroundColor}
        />
      </InfoContainer>
    </CardOpacity>
  );
};
