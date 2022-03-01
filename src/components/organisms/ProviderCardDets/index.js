import React from 'react';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Color} from '../../../theme/default';
import {Container, GeneralContainer, GeneralText} from '../../atoms';
import {LinkContainer, ProviderCard} from '../../molecules';
import {
  CardDetailsContainer,
  DetailsContainer,
  LinkContain,
  TextContainer,
} from './styled';
import {CardButtons} from '../../molecules/CardButtons';
import {jose} from '../../../assets/images';

export const ProviderCardDets = ({navigation, buttonType, type}) => {
  return (
    <Container>
      <CardDetailsContainer>
        <ProviderCard
          width={360}
          height={180}
          name={'José Rodríguez'}
          number={'3123100157'}
          zone={'Colima y VdeA'}
          image={jose}
        />
      </CardDetailsContainer>
      <DetailsContainer>
        <GeneralText
          title="Horario de atención"
          size="h3"
          color="text"
          weight
        />
        <GeneralText title="8:00 am a 4:00 pm" size="h4" color="text" />
        <GeneralText title="Descripción" size="h3" color="text" weight />
        <GeneralText
          title="Proveedor de servicios de fontanería"
          size="h4"
          color="text"
        />
        <GeneralContainer width="340px" height="70px">
          <TextContainer>
            <GeneralText
              title="Notas importantes"
              size="h4"
              color="secondary"
              weight
            />
            <GeneralText
              title="Estoy disponible los 365 días del año"
              size="h4"
              color="secondary"
            />
          </TextContainer>
        </GeneralContainer>
      </DetailsContainer>
      <LinkContain>
        <Icon name="star" size={20} color={Color.secondary} />
      </LinkContain>
      <CardButtons navigation={navigation} type={buttonType} />
    </Container>
  );
};
