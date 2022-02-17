import React from 'react';
import {Container, GeneralContainer, GeneralText} from '../../atoms';
import {AcceptDeclineBtns} from '../index';
import {GroupRow, GroupColumn} from './styled';
import upcomingServiceData from './upcomingServiceData';

export const UpcomingServiceComponent = ({servicio}) => {
  const serviceText = upcomingServiceData();
  return (
    <Container>
      <GeneralContainer height={'30%'}>
        <Container>
          <GroupRow>
            <GeneralText
              title={'Servicio: '}
              weight
              size={'h2'}
              color={'secondary'}
            />
            <GeneralText title={servicio} size={'h2'} color={'secondary'} />
          </GroupRow>
          <GroupColumn>{UpcomingServiceMapping(serviceText)}</GroupColumn>
          <AcceptDeclineBtns />
        </Container>
      </GeneralContainer>
    </Container>
  );
};
