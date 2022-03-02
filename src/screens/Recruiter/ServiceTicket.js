import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Container,
  GeneralText,
  GeneralButton,
  ContainerWhite,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {CenterView, PickerWrapper, MarginView} from '../styled';

const ServiceRow = ({title, data}) => {
  const serviceIcon = {
    Fecha: 'calendar-outline',
    Horario: 'time-outline',
    Provedor: 'person-outline',
    Servicio: 'hammer-outline',
    Cliente: 'home-outline',
  };
  return (
    <PickerWrapper>
      <GeneralText
        title={title + ': '}
        icon={serviceIcon[title]}
        size="h4"
        weight
      />
      <GeneralText title={data} size="h4" />
    </PickerWrapper>
  );
};

const Service = ({serviceItem}) => {
  const {datetime, provider, service, client} = serviceItem;
  return (
    <MarginView>
      <ServiceRow title="Fecha" data={datetime} />
      <ServiceRow title="Horario" data={datetime} />
      <ServiceRow title="Provedor" data={provider} />
      <ServiceRow title="Servicio" data={service} />
      <ServiceRow title="Cliente" data={client} />
    </MarginView>
  );
};

const FooterWrapper = ({navigation}) => {
  const style = {
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0,
  };
  return (
    <CenterView style={style}>
      <GeneralText
        size="h3"
        title="Favor de esperar confirmacion del provedor en un maximo de 5hrs."
        icon="alert-outline"
      />
      <GeneralButton
        title="Entendido"
        color="secondary"
        action={() => navigation.navigate('ServicesHistory')}
      />
    </CenterView>
  );
};

export const ServiceTicket = ({service, navigation}) => {
  service = {
    datetime: 'hey',
    provider: 'a',
    service: 'e',
    client: 'o',
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
        <CenterView>
          <GeneralText
            size="h2"
            color="secondary"
            title="Servicio registrado"
            weight
          />
        </CenterView>
        <Service serviceItem={service} />
        <FooterWrapper navigation={navigation} />
      </Container>
    </ContainerWhite>
  );
};
