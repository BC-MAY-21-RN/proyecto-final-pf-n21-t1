import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
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
        userType="Provider"
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

const Form = ({data, service, setService, handleText, value}) => {
  return (
    <>
      <MarginView>
        <GeneralText
          title="¿Qué servicio deseas proveer?"
          size="h2"
          color={'primary'}
          weight={'bold'}
        />
      </MarginView>
      <GeneralPicker data={data} selected={service} setSelected={setService}/>
      <GeneralInput
        title="Telefono celular"
        placeholder="1234567890"
        value={value}
        onChangeText={handleText}
      />
    </>
  );
};

export const ProviderCreation = ({navigation}) => {
  const [service, setService] = useState('');
  const [value, setValue] = useState();
  const handleText = text => {
    setValue(text)
  }
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
        <SafeAreaView />
        <Header />
        <Form
          data={data}
          style={style}
          service={service}
          setService={setService}
          handleText={handleText}
          value={value}
        />
        <CenterView>
          <GeneralButton
            title="Siguiente"
            color="secondary"
            action={() =>
              navigation.navigate('CreationSecondary', {
                InputNumber: value,
                ServicePicker: service,
              })
            }
          />
        </CenterView>
      </Container>
    </ContainerWhite>
  );
};

