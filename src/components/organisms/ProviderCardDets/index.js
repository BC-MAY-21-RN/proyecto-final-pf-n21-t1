import React from 'react';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Color} from '../../../theme/default';
import {
  Container,
  GeneralContainer,
  GeneralText,
  GeneralLink,
} from '../../atoms';
import {ProviderCard} from '../../molecules';
import {
  CardDetailsContainer,
  DetailsContainer,
  HourContainer,
  LinkContain,
  TextContainer,
  TimeContainer,
} from './styled';
import {CardButtons} from '../../molecules/CardButtons';

const HourPickers = ({hour}) => {
  return (
    <HourContainer>
      <GeneralText title={hour} size="h4" color="text" />
    </HourContainer>
  );
};
const getTime = time => {
  const timeAux = time.toDate().getHours() + ':' + time.toDate().getMinutes();
  return timeAux;
};
export const ProviderCardDets = ({navigation, buttonType, data}) => {
  const beginTimeHour = getTime(data.beginTime);
  const finishTimeHour = getTime(data.finishTime);
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
          <HourPickers hour={beginTimeHour} />
          <GeneralText title="a" size="h4" color="text" />
          <HourPickers hour={finishTimeHour} />
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
        <GeneralLink
          title={'Conoce la opinion de sus clientes'}
          color={'secondary'}
          weight
          size={'h7'}
          action={() => navigation.navigate('CustomerOpinions')}
        />
      </LinkContain>
      <CardButtons navigation={navigation} type={buttonType} data={data} />
    </Container>
  );
};
