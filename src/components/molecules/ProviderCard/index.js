import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../theme/default';
import {jose} from '../../../assets/images';
import {GeneralContainer, GeneralText} from '../../atoms';
import {
  AvatarImg,
  ImgContainer,
  InfoContainer,
  NumberRow,
  StarsContainer,
} from './styled';

export const ProviderCard = ({
  name,
  number,
  zone,
  image,
  stars,
  width,
  height,
}) => {
  const handleCardPress = () => {
    console.log('boton presionado');
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleCardPress}>
      <GeneralContainer width={width} height={height} direction>
        <ImgContainer>
          <AvatarImg source={jose} />
        </ImgContainer>
        <InfoContainer>
          <GeneralText title={name} size="h3" color="secondary" weight />
          <NumberRow>
            <Icon name="call-outline" size={20} />
            <GeneralText title={number} size="h4" color="text" />
          </NumberRow>
          <GeneralText title={zone} size="h4" color="text" />
          <StarsContainer />
        </InfoContainer>
      </GeneralContainer>
    </TouchableOpacity>
  );
};
