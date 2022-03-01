import React from 'react';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Color} from '../../../theme/default';
import {Container, GeneralContainer, GeneralText} from '../../atoms';
import {LinkContainer, ProviderCard} from '../../molecules';
import {
  CardDetailsContainer,
  DetailsContainer,
  HourContainer,
  LinkContain,
  TextContainer,
  TimeContainer,
} from './styled';
import {CardButtons} from '../../molecules/CardButtons';

export const ProviderCardDets = ({navigation, buttonType, data}) => {
  const beginTimeHour = data.beginTime.toDate().getHours() + ':';
  const beginTimeMin = data.beginTime.toDate().getMinutes();
  const finishTimeHour = data.finishTime.toDate().getHours() + ':';
  const finishTimeMin = data.finishTime.toDate().getMinutes();
  return (
    <Container>
      <CardDetailsContainer>
        {console.log(data.image)}
        <ProviderCard
          width={360}
          height={180}
          name={data.name}
          number={data.inputNumber}
          zone={'Funcionalidad de maps'}
          image={data.image}
        />
      </CardDetailsContainer>
      <DetailsContainer>
        <GeneralText
          title="Horario de atención"
          size="h3"
          color="text"
          weight
        />
        <TimeContainer>
          <HourContainer>
            <GeneralText title={beginTimeHour} size="h4" color="text" />
            <GeneralText title={beginTimeMin} size="h4" color="text" />
          </HourContainer>
          <GeneralText title="a" size="h4" color="text" />
          <HourContainer>
            <GeneralText title={finishTimeHour} size="h4" color="text" />
            <GeneralText title={finishTimeMin} size="h4" color="text" />
          </HourContainer>
        </TimeContainer>
        <GeneralContainer width="340px" height="80px" justify>
          <TextContainer>
            <GeneralText
              title="Notas importantes"
              size="h4"
              color="secondary"
              weight
            />
            <GeneralText title={data.notes} size="h4" color="secondary" />
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
