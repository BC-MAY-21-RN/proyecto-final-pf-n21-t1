import React, { useState } from 'react';
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
import {CenterView, MarginView} from '../styled';

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
          justify={'center'}
        />
      
      </CenterView>
    </>
  );
};

const Form = ({data, style}) => {
  const [service, setService] = useState('');
  const [value, setValue] = useState();
  const handleText = text => {
    setValue(text)
  }
  return (
    <>
      <MarginView>
        <GeneralText title="¿Qué servicio deseas proveer?" size="h2" color={'primary'} weight={'bold'} />
      </MarginView>
      <GeneralPicker data={data} selected={service} setSelected={setService}/>
      <GeneralInput title="Telefono celular" placeholder="1234567890" value={value} onChangeText={handleText}/>
    </>
  );
};

export const ProviderCreation = ({navigation}) => {

  const style = {
    width: '50%',
  };
  const data = [
    {
      value: 'Fontanería',
      label: 'Fontanería',
    },
    {
      value: 'Construcción',
      label: 'Construcción'
    },
    {
      value: 'Técnico',
      label: 'Técnico'
    },
    {
      value: 'Electricista',
      label: 'Electricista'
    },
    {
      value: 'Carpintero',
      label: 'Carpintero'
    },
    {
      value: 'Pintor',
      label: 'Pintor'
    },
  ];
  return (
    <ContainerWhite>
      <Container>
        <Header />
        <Form data={data} style={style} />
        <CenterView>
          <GeneralButton title="Siguiente" color="secondary" action={()=>navigation.navigate("CreationSecondary")}/>
        </CenterView>
      </Container>
    </ContainerWhite>
  );
};
