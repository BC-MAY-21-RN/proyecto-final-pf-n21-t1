import React from 'react';
import {View} from 'react-native';
import {
  GeneralInput,
  GeneralText,
  GeneralPicker,
  GeneralButton,
  ContainerWhite,
  Container,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {PickerWrapper, CenterView, MarginView} from '../styled';

const Header = () => {
  return (
    <>
      <GeneralHeader
        title="Tarjeta de presentación"
        isMenuVisible
        isTabRendered
        size="h1"
        color="background"
        weight
      />
      <CenterView>
        <GeneralText
          title="Nos alegra que ofrezcas tus servicios"
          size="h1"
          color="secondary"
          weight
        />
        <GeneralText
          title="Antes de comenzar cuentanos un poco de ti..."
          size="h5"
        />
      </CenterView>
    </>
  );
};

const Form = ({data, style}) => {
  return (
    <>
      <MarginView>
        <GeneralText title="Servicios" size="h4" />
      </MarginView>
      <GeneralPicker data={data} />
      <GeneralInput title="Telefono celular" placeholder="1234567890" />
      <MarginView>
        <GeneralText title="Horario de disponibilidad" size="h4" />
        <PickerWrapper>
          <GeneralPicker data={data} style={style} />
          <GeneralPicker data={data} style={style} />
        </PickerWrapper>
      </MarginView>
      <GeneralInput
        title="Notas importantes"
        placeholder="Trabajo días festivos..."
      />
    </>
  );
};

export const ProviderCreation = () => {
  const style = {
    width: '50%',
  };
  const data = [
    {
      value: 0,
      label: 'Prueba',
    },
  ];
  return (
    <ContainerWhite>
      <Container>
        <Header />
        <Form data={data} style={style} />
        <CenterView>
          <GeneralButton title="Empezar" color="secondary" />
        </CenterView>
      </Container>
    </ContainerWhite>
  );
};
