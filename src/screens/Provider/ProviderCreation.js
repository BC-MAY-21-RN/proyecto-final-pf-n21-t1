import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  GeneralInput,
  GeneralButton,
  ContainerWhite,
  Container,
} from '../../components/atoms';
import {
  GeneralHeader,
  ImageDetails,
  ServicePicker,
} from '../../components/molecules';
import {ButtonContainer, InputView} from '../styled';
import triggerValidation from '../../utils/authentication/inputValidations';

const Form = ({
  service,
  setService,
  handleText,
  value,
  notes,
  handleNotes,
  error,
}) => {
  const {phoneError, notesError} = error;
  return (
    <>
      <ServicePicker service={service} setService={setService} />
      <InputView>
        <GeneralInput
          title="Telefono celular"
          placeholder="1234567890"
          value={value}
          onChangeText={handleText}
          errorMessage={phoneError}
        />
        <GeneralInput
          title="Notas importantes"
          placeholder="Describe tus servicios"
          value={notes}
          onChangeText={handleNotes}
          errorMessage={notesError}
        />
      </InputView>
    </>
  );
};

export const ProviderCreation = ({navigation}) => {
  const [service, setService] = useState('');
  const [value, setValue] = useState();
  const [notes, setNotes] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  );
  const [phoneError, setPhoneError] = useState(' ');
  const [notesError, setNotesError] = useState(' ');
  const [isOk, setOk] = useState(false);
  const initialRender = useRef(true);

  const handleText = text => {
    setValue(text);
    triggerValidation(text, 'phone', setPhoneError);
  };
  const handleNotes = text => {
    setNotes(text);
    triggerValidation(text, 'name', setNotesError);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (phoneError || notesError) {
        setOk(false);
      } else {
        setOk(true);
      }
    }
  }, [notesError, phoneError, isOk]);

  useEffect(() => console.log(file), [file]);
  const formProps = {
    service,
    setService,
    handleText,
    value,
    notes,
    handleNotes,
    error: {notesError, phoneError},
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
          navigation={navigation}
        />
        <ScrollView>
          <ImageDetails image={image} setImage={setImage} setFile={setFile} />
          <Form {...formProps} />
          <ButtonContainer>
            <GeneralButton
              title="Siguiente"
              color="secondary"
              action={() =>
                navigation.navigate('CreationSecondary', {
                  InputNumber: value,
                  ServicePicker: service,
                  InputNotes: notes,
                  Image: file,
                })
              }
              disabled={!isOk}
            />
          </ButtonContainer>
          <SafeAreaView />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
