import React from 'react';
import { View } from 'react-native';
import {
  GeneralInput,
  GeneralText,
  GeneralPicker,
  GeneralButton,
  ContainerWhite,
  Container,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {PickerWrapper, CenterView, MarginView, InputView} from '../styled';


const Form = ({data, style}) => {
  return (
    <>
      <MarginView height={"280px"}>
        <GeneralText title="¿Cuál es tu horario de disponibilidad?" size="h2" color={'primary'} weight={'bold'}  justify={'center'} />
        <PickerWrapper>
          <GeneralPicker data={data} style={style} />
          <GeneralPicker data={data} style={style} />
        </PickerWrapper>
      </MarginView>
      <InputView>
        <GeneralInput
          title="Notas importantes"
          placeholder="Trabajo días festivos..."
          />
      </InputView>
    </>
  );
};

export const CreationSecondary = ({navigation}) => {
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
        <GeneralHeader
          title="Tarjeta de presentación"
          isMenuVisible
          isTabRendered
          size="h1"
          color="background"
          weight
          />
        <Form data={data} style={style} />
        <CenterView>
          <GeneralButton title="Empezar" color="secondary" action={()=>navigation.navigate("ProviderPreview")}/>
        </CenterView>
      </Container>
    </ContainerWhite>
  );
};
