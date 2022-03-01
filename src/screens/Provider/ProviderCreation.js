import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  GeneralInput,
  GeneralText,
  GeneralButton,
  ContainerWhite,
  Container,
  ImageButton,
} from '../../components/atoms';
import {
  GeneralHeader,
  ImageDetails,
  ServicePicker,
} from '../../components/molecules';
import {ButtonContainer, CenterView, InputView} from '../styled';

const Form = ({service, setService, handleText, value, notes, handleNotes}) => {
  return (
    <>
      <ServicePicker service={service} setService={setService} />
      <InputView>
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
      </InputView>
    </>
  );
};

export const ProviderCreation = ({navigation}) => {
  const [service, setService] = useState('');
  const [value, setValue] = useState();
  const [notes, setNotes] = useState();
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  );
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
        <SafeAreaView />
        <GeneralHeader
          title="Ofrece tus servicios"
          isTabRendered
          size="h1"
          color="background"
          weight
          userType="Provider"
        />
        <ScrollView>
          <ImageDetails image={image} setImage={setImage} />
          <Form
            style={style}
            service={service}
            setService={setService}
            handleText={handleText}
            value={value}
            notes={notes}
            handleNotes={handleNotes}
          />
          <ButtonContainer>
            <GeneralButton
              title="Siguiente"
              color="secondary"
              action={() =>
                navigation.navigate('CreationSecondary', {
                  InputNumber: value,
                  ServicePicker: service,
                  InputNotes: notes,
                  Image: image,
                })
              }
            />
          </ButtonContainer>
          <SafeAreaView />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
