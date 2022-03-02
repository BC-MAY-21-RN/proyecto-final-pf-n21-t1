import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  GeneralInput,
  GeneralText,
  GeneralPicker,
  GeneralButton,
  ContainerWhite,
  Container,
  ImageButton,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {CenterView, MarginView} from '../styled';
import triggerValidation from '../../utils/authentication/inputValidations';

const Header = () => {
  return (
    <>
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

const Form = ({data, service, setService, handleText, value, phoneError}) => {
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
      <GeneralPicker data={data} selected={service} setSelected={setService} />
      <GeneralInput
        title="Telefono celular"
        placeholder="1234567890"
        value={value}
        onChangeText={handleText}
        errorMessage={phoneError}
      />
    </>
  );
};

export const ProviderCreation = ({navigation}) => {
  const [service, setService] = useState('');
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState();
  const [isOk, setOk] = useState(false);

  const handleText = text => {
    setPhone(text);
    setOk(triggerValidation(text, 'phone', setPhoneError));
  };
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
      label: 'Construcción',
    },
    {
      value: 'Técnico',
      label: 'Técnico',
    },
    {
      value: 'Electricista',
      label: 'Electricista',
    },
    {
      value: 'Carpintero',
      label: 'Carpintero',
    },
    {
      value: 'Pintor',
      label: 'Pintor',
    },
  ];
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          title="Tarjeta de presentación"
          isMenuVisible
          isTabRendered
          size="h1"
          color="background"
          weight
          userType="Provider"
          navigation={navigation}
        />
        <Header />
        <ImageButton />
        <Form
          data={data}
          style={style}
          service={service}
          setService={setService}
          handleText={handleText}
          phoneError={phoneError}
          value={phone}
        />
        <CenterView>
          <GeneralButton
            title="Siguiente"
            color="secondary"
            action={() =>
              navigation.navigate('CreationSecondary', {
                InputNumber: phone,
                ServicePicker: service,
              })
            }
            disabled={!isOk}
          />
        </CenterView>
      </Container>
    </ContainerWhite>
  );
};
