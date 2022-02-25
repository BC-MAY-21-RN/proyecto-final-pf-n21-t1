import React, { useState } from 'react';
import {
  GeneralInput,
  GeneralText,
  GeneralButton,
  ContainerWhite,
  Container,
} from '../../components/atoms';
import {GeneralHeader, ServicePicker} from '../../components/molecules';
import {CenterView, InputView} from '../styled';
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

const Form = ({service, setService, handleText, value, notes, handleNotes}) => {
  return (
    <>
      <ServicePicker service={service} setService={setService} />
      <GeneralInput
        title="Telefono celular"
        placeholder="1234567890"
        value={value}
        onChangeText={handleText}
      />
      <GeneralInput
        title="Notas importantes"
        placeholder="Describe tus servicios"
        value={notes}
        onChangeText={handleNotes}
      />
    </>
  );
};

export const ProviderCreation = ({navigation}) => {
  const [service, setService] = useState('');
  const [value, setValue] = useState();
  const [notes, setNotes] = useState();
  const handleText = text => {
    setValue(text);
  };
  const handleNotes = text => {
    setNotes(text);
  };
  const style = {
    width: '50%',
  };
  return (
    <ContainerWhite>
      <Container>
        <Header />
        <Form
          style={style}
          service={service}
          setService={setService}
          handleText={handleText}
          value={value}
          notes={notes}
          handleNotes={handleNotes}
        />
        <CenterView>
          <GeneralButton
            title="Siguiente"
            color="secondary"
            action={() =>
              navigation.navigate('CreationSecondary', {
                InputNumber: value,
                ServicePicker: service,
                InputNotes: notes,
              })
            }
          />
        </CenterView>
      </Container>
    </ContainerWhite>
  );
};
