import React, {useEffect, useState} from 'react';
import {GeneralHeader, ServiceGeneralCard} from '../../components/molecules';
import {Container, ContainerWhite} from '../../components/atoms';
import {SafeAreaView, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const getServices = setData => {
  firestore()
    .collection('Services')
    .where('clientUid', '==', auth().currentUser.uid)
    .get()
    .then(result => {
      const docs = result.docs;
      const dataArray = docs.map(doc => doc.data());
      setData(dataArray);
    });
};

export const ServicesHistory = ({navigation}) => {
  const dataSet = {
    Accepted: 'Servicio aceptado',
    Pending: 'Servicio pendiente',
    Done: 'Servicio finalizado',
    Decline: 'Servicio declinado',
  };

  const [data, setData] = useState();
  useEffect(() => {
    getServices(setData);
  }, []);

  const Card = ({item}) => {
    const card = [
      {
        title: 'Provedor: ' + item.provider,
      },
      {
        title: 'Fecha: ' + item.datetime.toDate().toDateString(),
      },
      {
        title: 'Hora: ' + item.datetime.toDate().toLocaleTimeString('es-MX'),
      },
    ];

    return (
      <ServiceGeneralCard
        servicio={'Fontanero'}
        status={dataSet[item.status]}
        navigation={navigation}
        data={card}
      />
    );
  };

  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          title="Servicios Solicitados "
          color="background"
          weight
          size="h1"
          isMenuVisible
          userType="Recruiter"
          navigation={navigation}
        />
        {data && (
          <FlatList
            data={data}
            renderItem={Card}
            refreshing={data ? false : true}
            onRefresh={() => getServices(setData)}
          />
        )}
      </Container>
    </ContainerWhite>
  );
};
