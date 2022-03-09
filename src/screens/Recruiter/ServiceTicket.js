import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Container,
  GeneralText,
  GeneralButton,
  ContainerWhite,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {
  CenterView,
  PckrWrapper,
  MrgnView,
  CntrView,
  CntrComponent,
} from '../styled';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const getName = setClientName => {
  firestore()
    .collection('Users')
    .doc(auth().currentUser.uid)
    .onSnapshot(documentSnapshot => {
      setClientName(documentSnapshot.data().name);
    });
};

const ServiceRow = ({title, data}) => {
  const serviceIcon = {
    Fecha: 'calendar-outline',
    Horario: 'time-outline',
    Provedor: 'person-outline',
    Servicio: 'hammer-outline',
    Cliente: 'home-outline',
  };
  return (
    <PckrWrapper>
      <GeneralText
        title={title + ': '}
        icon={serviceIcon[title]}
        size="h4"
        weight
      />
      <GeneralText title={data} size="h4" />
    </PckrWrapper>
  );
};

const Service = ({serviceItem}) => {
  const {datetime, provider, service, client, address} = serviceItem;
  const date = `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()}`;
  const time = `${datetime.getHours()}:${datetime.getMinutes()}`;
  return (
    <MrgnView>
      <ServiceRow title="Fecha" data={date} />
      <ServiceRow title="Horario" data={time} />
      <ServiceRow title="Provedor" data={provider} />
      <ServiceRow title="Servicio" data={service} />
      <ServiceRow title="Cliente" data={client} />
      <ServiceRow title="Dirección" data={address} />
    </MrgnView>
  );
};

const FooterWrapper = ({navigation, data}) => {
  const handleAction = () => {
    firestore()
      .collection('Services')
      .add(data)
      .then(() =>
        navigation.reset({
          index: 0,
          routes: [{name: 'ServicesHistory'}],
        }),
      );
  };
  const style = {
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0,
  };
  return (
    <CntrComponent style={style}>
      <GeneralText
        size="h3"
        title="Favor de esperar confirmacion del provedor en un maximo de 5hrs."
        icon="alert-outline"
      />
      <GeneralButton
        title="Entendido"
        color="secondary"
        action={handleAction}
      />
    </CntrComponent>
  );
};

export const ServiceTicket = ({service, navigation}) => {
  const route = useRoute();
  console.log(route.params.data);
  const {name, servicePicker, uid, location, address} = route.params.data;
  const {date} = route.params;
  const datetime = new Date(date);
  const [clientName, setClientName] = useState();

  useEffect(() => {
    getName(setClientName);

    return () => {
      setClientName();
    };
  }, []);

  service = {
    datetime: datetime,
    provider: name,
    service: servicePicker,
    client: clientName,
    address: address,
  };

  const ticket = {
    providerUid: uid,
    clientUid: auth().currentUser.uid,
    status: 'Pending',
    datetime,
    provider: name,
    client: clientName,
    service: servicePicker,
    location: location,
    address: address,
  };

  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          title="Contratar"
          isTabRendered
          size="h1"
          color="background"
          weight
          userType="Recruiter"
          navigation={navigation}
        />
        <CntrView>
          <CenterView>
            <GeneralText
              size="h2"
              color="secondary"
              title="Servicio registrado"
              weight
            />
          </CenterView>
          <Service serviceItem={service} />
          <FooterWrapper navigation={navigation} data={ticket} />
        </CntrView>
      </Container>
    </ContainerWhite>
  );
};
