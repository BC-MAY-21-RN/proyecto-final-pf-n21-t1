import React, {useState} from 'react';
import {ContainerWhite, Container, GeneralText} from '../../components/atoms';
import {GeneralHeader, TimePickers} from '../../components/molecules';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native';

const Pickers = ({
  beginTime,
  setBeginTime,
  finishTime,
  setFinishTime,
  navigation,
  route,
  errors,
}) => {
  return (
    <ContainerWhite>
      <Container>
        <TimePickers
          beginTime={beginTime}
          setBeginTime={setBeginTime}
          finishTime={finishTime}
          setFinishTime={setFinishTime}
          textTitle={
            'Selecciona un intervalo de tiempo para brindar tus servicios'
          }
          buttonTitle={'Crear'}
          action={() =>
            providerRegistration(
              navigation,
              route.params.InputNumber,
              route.params.ServicePicker,
              beginTime,
              finishTime,
              route.params.InputNotes,
              route.params.Image,
            )
          }
          errors={errors}>
          <GeneralText title={errors.error} size="h6" color="facebook" />
        </TimePickers>
      </Container>
    </ContainerWhite>
  );
};

const providerRegistration = (
  navigation,
  inputNumber,
  servicePicker,
  beginTime,
  finishTime,
  notes,
  image,
) => {
  const provider = {
    inputNumber: inputNumber,
    servicePicker: servicePicker,
    beginTime: beginTime,
    finishTime: finishTime,
    notes: notes,
    image: image,
    providerRegistered: 'true',
  };
  firestore()
    .collection('Users')
    .doc(auth().currentUser.uid)
    .set(provider, {merge: true})
    .then(() =>
      navigation.reset({
        index: 0,
        routes: [{name: 'UpcomingServices'}],
      }),
    );
};

export const CreationSecondary = ({navigation, route}) => {
  const [finishTime, setFinishTime] = useState(new Date());
  const [beginTime, setBeginTime] = useState(new Date());
  const [isOk, setOk] = useState(true);
  const [error, setError] = useState();

  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          title="Tarjeta de presentación"
          isTabRendered
          size="h1"
          color="background"
          weight
        />
        <Pickers
          beginTime={beginTime}
          setBeginTime={setBeginTime}
          finishTime={finishTime}
          setFinishTime={setFinishTime}
          navigation={navigation}
          route={route}
          errors={{setError, setOk, isOk, error}}
        />
      </Container>
    </ContainerWhite>
  );
};
