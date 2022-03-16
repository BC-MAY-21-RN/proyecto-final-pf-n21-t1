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

const getItemCard = (item, provider) => {
  return provider
    ? {
        title: 'Cliente: ',
        titleName: item.client,
        status: undefined,
        botones: true,
      }
    : {
        title: 'Proveedor: ',
        titleName: item.provider,
        status: dataSet[item.status],
        botones: false,
      };
}
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
    const itemCard = getItemCard(item, provider);
    const title = itemCard.title;
    const titleName = itemCard.titleName;
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
        status={itemCard.status}
        statusPrueba={item.status}
        navigation={navigation}
        data={card}
        uid={item.uid}
        botones={itemCard.botones}
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
