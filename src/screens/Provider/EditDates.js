import React, {useState} from 'react';
import {
  Container,
  ContainerWhite,
  GeneralButton,
  GeneralText,
} from '../../components/atoms';
import {GeneralHeader, TimePickers} from '../../components/molecules';
import {MarginView} from '../styled';

export const EditDates = () => {
  const [beginTime, setBeginTime] = useState(new Date());
  const [finishTime, setFinishTime] = useState(new Date());
  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader
          title="Tarjeta de presentación"
          isMenuVisible
          isTabRendered
          size="h1"
          color="background"
          weight
        />
        <TimePickers
          beginTime={beginTime}
          setBeginTime={setBeginTime}
          finishTime={finishTime}
          setFinishTime={setFinishTime}
          textTitle={
            'Modifica el intervalo de tiempo para brindar tus servicios'
          }
          buttonTitle={'Confirmar'}
        />
      </Container>
    </ContainerWhite>
  );
};
