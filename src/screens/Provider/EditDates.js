import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {GeneralHeader, TimePickers} from '../../components/molecules';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const providerModification = (
  navigation,
  route,
  beginTime,
  finishTime,
) => {
  const providerUpdate = {
    image: route.params.Image,
    name: route.params.Name,
    email: route.params.Email,
    password: route.params.Password,
    inputNumber: route.params.Phone,
    notes: route.params.Notes,
    beginTime: beginTime,
    finishTime: finishTime,
  };
  firestore()
    .collection('Users')
    .doc(auth().currentUser.uid)
    .update(providerUpdate)
    .then(() => navigation.navigate('ProviderPreview'));
};

export const EditDates = ({navigation, route}) => {
  const [beginTime, setBeginTime] = useState(
    route.params.Data.beginTime.toDate(),
  );
  const [finishTime, setFinishTime] = useState(
    route.params.Data.finishTime.toDate(),
  );
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
          navigation={navigation}
        />
        <TimePickers
          beginTime={beginTime}
          setBeginTime={setBeginTime}
          finishTime={finishTime}
          setFinishTime={setFinishTime}
          textTitle={
            'Modifica el intervalo de tiempo para brindar tus servicios'
          }
          buttonTitle={'Confirmar'}
          action={() =>
            providerModification(navigation, route, beginTime, finishTime)
          }
        />
      </Container>
    </ContainerWhite>
  );
};
