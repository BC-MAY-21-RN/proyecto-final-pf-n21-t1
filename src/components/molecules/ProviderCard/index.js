import React from 'react';
import {GeneralText, StarRating} from '../../atoms';
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
  return (
    <CardOpacity activeOpacity={1} onPress={handleCardPress}>
      <ImgContainer>
        <AvatarImg source={image} />
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
