import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite, GeneralText} from '../../components/atoms';
import {GeneralHeader, TimePickers} from '../../components/molecules';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import uploadImage from '../../utils/uploadImage';
import TimeHook from '../../utils/timeHook';

const handlePromiseImage = file => {
  if (file) return uploadImage(file);
  else return new Promise(resolve => resolve(false));
};

export const providerModification = (
  navigation,
  route,
  beginTime,
  finishTime,
) => {
  const file = route.params.Image;

  const providerUpdate = {
    name: route.params.Name,
    inputNumber: route.params.Phone,
    notes: route.params.Notes,
    beginTime: beginTime,
    finishTime: finishTime,
  };

  handlePromiseImage(file).then(res => {
    if (res) providerUpdate.image = res.metadata.fullPath;

    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .update(providerUpdate)
      .then(() =>
        navigation.reset({index: 0, routes: [{name: 'ProviderPreview'}]}),
      );
  });
};

export const EditDates = ({navigation, route}) => {
  const [isOk, setOk] = useState(true);
  const [error, setError] = useState();
  const [beginTime, setBeginTime] = useState(
    route.params.Data.beginTime.toDate(),
  );
  const [finishTime, setFinishTime] = useState(
    route.params.Data.finishTime.toDate(),
  );
  useEffect(() => {
    return () => {
      setOk();
      setError();
      setBeginTime();
      setFinishTime();
    };
  }, []);
  TimeHook(beginTime, finishTime, setError, setOk);
  /*useEffect(() => {
    if (beginTime > finishTime) {
      setError('La fecha no es correcta');
      setOk(false);
    } else {
      setError();
      setOk(true);
    }
  }, [beginTime, finishTime]);*/

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
          errors={{setError, setOk, isOk, error}}
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
          }>
          <GeneralText title={error} size="h6" color="facebook" />
        </TimePickers>
      </Container>
    </ContainerWhite>
  );
};
