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

export const ProviderCardDets = ({
  navigation,
  buttonType,
  name,
  number,
  zone,
  image,
  beginTime,
  finishTime,
  notes,
}) => {
  return (
    <Container>
      <CardDetailsContainer>
        <ProviderCard
          width={360}
          height={180}
          name={name}
          number={number}
          zone={zone}
          image={image}
        />
      </CardDetailsContainer>
      <DetailsContainer>
        <GeneralText
          title="Horario de atención"
          size="h3"
          color="text"
          weight
        />
        <GeneralText title={beginTime} size="h4" color="text" />
        <GeneralText title={finishTime} size="h4" color="text" />
        <GeneralContainer width="340px" height="70px">
          <TextContainer>
            <GeneralText
              title="Notas importantes"
              size="h4"
              color="secondary"
              weight
            />
            <GeneralText title={notes} size="h4" color="secondary" />
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
