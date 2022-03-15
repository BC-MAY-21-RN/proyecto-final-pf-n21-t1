import React, {useEffect, useState} from 'react';
import {GeneralHeader, ServiceGeneralCard} from '../../molecules';
import {FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const getServices = (setData, provider) => {
  firestore()
    .collection('Services')
    .where(provider ? 'providerUid' : 'clientUid', '==', auth().currentUser.uid)
    .get()
    .then(result => {
      const docs = result.docs;
      const dataArray = docs.map(doc => {
        return {...doc.data(), uid: doc.id};
      });
      setData(dataArray);
    });
};

export const Services = ({navigation, provider}) => {
  const dataSet = {
    Accepted: 'Servicio aceptado',
    Pending: 'Servicio pendiente',
    Done: 'Servicio finalizado',
    Decline: 'Servicio declinado',
  };

  const [data, setData] = useState();
  useEffect(() => {
    getServices(setData, provider);
  }, []);

  const Card = ({item}) => {
    const title = provider ? 'Cliente: ' : 'Provedor: ';
    const titleName = provider ? item.client : item.provider;
    const card = [
      {
        title: title + titleName,
      },
      {
        title: 'Fecha: ' + item.datetime.toDate().toDateString(),
      },
      {
        title: 'Hora: ' + item.datetime.toDate().toLocaleTimeString('es-MX'),
      },
      {
        title: 'Dirección: ' + item.address,
      },
    ];

    return (
      <ServiceGeneralCard
        servicio={item.service}
        status={provider ? undefined : dataSet[item.status]}
        statusPrueba={item.status}
        navigation={navigation}
        data={card}
        uid={item.uid}
        botones={provider ? true : false}
      />
    );
  };

  return (
    <>
      <GeneralHeader
        isTabRendered
        title="Servicios Solicitados "
        color="background"
        weight
        size="h1"
        isMenuVisible
        userType={provider ? 'Provider' : 'Recruiter'}
        navigation={navigation}
      />
      {data && (
        <FlatList
          data={data}
          renderItem={Card}
          refreshing={data ? false : true}
          onRefresh={() => getServices(setData, provider)}
        />
      )}
    </>
  );
};
