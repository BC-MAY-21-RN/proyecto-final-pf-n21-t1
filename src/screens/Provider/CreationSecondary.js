import React, {useState} from 'react';
import {ContainerWhite, Container} from '../../components/atoms';
import {GeneralHeader, TimePickers} from '../../components/molecules';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native';

const Form = ({
  beginTime,
  setBeginTime,
  finishTime,
  setFinishTime,
  navigation,
  route,
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
            )
          }
        />
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
) => {
  console.log(
    'Data' + inputNumber,
    servicePicker,
    beginTime,
    finishTime,
    notes,
  );
  const provider = {
    inputNumber: inputNumber,
    servicePicker: servicePicker,
    beginTime: beginTime,
    finishTime: finishTime,
    notes: notes,
    providerRegistered: 'true',
  };
  firestore()
    .collection('Users')
    .doc(auth().currentUser.uid)
    .set(provider, {merge: true})
    .then(() => navigation.navigate('UpcomingServices'));
};

export const CreationSecondary = ({navigation, route}) => {
  const [finishTime, setFinishTime] = useState(new Date());
  const [beginTime, setBeginTime] = useState(new Date());
  const style = {
    width: '50%',
  };
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
        <Form
          style={style}
          beginTime={beginTime}
          setBeginTime={setBeginTime}
          finishTime={finishTime}
          setFinishTime={setFinishTime}
          navigation={navigation}
          route={route}
        />
      </Container>
    </ContainerWhite>
  );
};
