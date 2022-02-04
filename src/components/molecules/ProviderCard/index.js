import React from 'react';
import {TouchableOpacity} from 'react-native';
import { jose } from '../../../assets/images';
import {GeneralContainer, GeneralText} from '../../atoms';
import {
  AvatarImg,
  CardContainer,
  ImgContainer,
  InfoContainer,
  StarsContainer,
} from './styled';

export const ProviderCard = ({name, number, zone, service, image, stars}) => {
  const handleCardPress = () => {
    console.log('boton presionado');
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleCardPress}>
      <GeneralContainer width="360px" height="180px" direction>
        <ImgContainer>
          <AvatarImg source={jose} />
        </ImgContainer>
        <InfoContainer>
          <GeneralText
            title="José Rodríguez"
            size="h3"
            color="secondary"
            weight
          />
          <GeneralText title="312-359-7426" size="h4" color="text" />
          <GeneralText
            title="Colima y Villa de Álvarez"
            size="h4"
            color="text"
          />
          <StarsContainer />
        </InfoContainer>
      </GeneralContainer>
    </TouchableOpacity>
  );
};
