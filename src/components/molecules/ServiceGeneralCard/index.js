import React, {useState, useEffect} from 'react';
import {ServiceStatus, GeneralContainer, GeneralText} from '../../atoms';
import {AcceptDeclineBtns, QualifyButton} from '../index';
import {GroupRow, GroupColumn, ShadowView, StarAndServiceRow} from './styled';
import ServiceCardMapping from '../../../utils/ServiceCardMapping';
import {AcceptedService} from '../index';

function qualify(status, qualifyButton) {
  if (status === 'Servicio finalizado') {
    qualifyButton = true;
  } else {
    qualifyButton = false;
  }
  return qualifyButton;
}

const HandleStatus = props => {
  const {accepted, botones} = props;
  return (
    <>
      {botones.mostrarBotones && (
        <AcceptDeclineBtns
          setServAceptado={accepted.setServAceptado}
          setMostrarBotones={botones.setMostrarBotones}
          uid={props.uid}
        />
      )}
      {accepted.servAceptado && (
        <AcceptedService
          navigation={props.navigation}
          uid={props.uid}
          setServAceptado={accepted.setServAceptado}
          setMostrarBotones={botones.setMostrarBotones}
        />
      )}
    </>
  );
};

const setStatus = (
  statusPrueba,
  setServAceptado,
  setMostrarBotones,
  provider,
) => {
  if (!provider) {
    setMostrarBotones(false);
    setServAceptado(false);
  } else if (statusPrueba === 'Done' || statusPrueba === 'Decline') {
    setMostrarBotones(false);
    setServAceptado(false);
  } else if (statusPrueba === 'Pending') {
    setMostrarBotones(true);
    setServAceptado(false);
  } else if (statusPrueba === 'Accepted') {
    setMostrarBotones(false);
    setServAceptado(true);
  }
};

const GroupWrapper = ({servicio}) => {
  return (
    <GroupRow>
      <GeneralText weight title={servicio} size={'h3'} color={'secondary'} />
    </GroupRow>
  );
}

const StarRow = ({status, navigation, uid, providerUid, client}) => {
  return (
    <StarAndServiceRow>
      {status && <ServiceStatus status={status} />}
      {qualify(status) && (
        <QualifyButton
          navigation={navigation}
          uid={uid}
          providerUid={providerUid}
          client={client}
        />
      )}
    </StarAndServiceRow>
  );
};

export const ServiceGeneralCard = props => {
  const {navigation, statusPrueba, providerUid, client, provider} = props;
  const [servAceptado, setServAceptado] = useState();
  const [mostrarBotones, setMostrarBotones] = useState();
  useEffect(() => {
    setStatus(statusPrueba, setServAceptado, setMostrarBotones, provider);
  }, [props.data]);
  return (
    <GeneralContainer height={'160px'} width={'90%'} marginBottom={'5%'}>
      <GroupWrapper servicio={props.servicio} />
      <GroupColumn>{ServiceCardMapping(props.data)}</GroupColumn>
      <HandleStatus
        uid={props.uid}
        accepted={{servAceptado, setServAceptado}}
        botones={{mostrarBotones, setMostrarBotones}}
        navigation={navigation}
      />
      <StarRow
        status={props.status}
        navigation={navigation}
        uid={props.uid}
        providerUid={providerUid}
        client={client}
      />
    </GeneralContainer>
  );
};
