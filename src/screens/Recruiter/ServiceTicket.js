import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Container,
  GeneralText,
  GeneralButton,
  ContainerWhite,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {CenterView, PckrWrapper, MrgnView, CntrView, CntrComponent} from '../styled';

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
  const {datetime, provider, service, client} = serviceItem;
  return (
    <MrgnView>
      <ServiceRow title="Fecha" data={datetime} />
      <ServiceRow title="Horario" data={datetime} />
      <ServiceRow title="Provedor" data={provider} />
      <ServiceRow title="Servicio" data={service} />
      <ServiceRow title="Cliente" data={client} />
    </MrgnView>
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
    <CntrComponent style={style}>
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
    </CntrComponent>
  );
};

export const ServiceTicket = ({service, navigation}) => {
  service = {
    datetime: '11:00 pm',
    provider: 'Pancho Barraza',
    service: 'Carpinteria',
    client: 'Alma Marquez',
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
          <FooterWrapper navigation={navigation} />
        </CntrView>
      </Container>
    </ContainerWhite>
  );
};
