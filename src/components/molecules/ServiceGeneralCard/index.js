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

const handleStatus = (mostrarBotones, statusPrueba) => {
  if (
    mostrarBotones &&
    statusPrueba !== 'Decline' &&
    statusPrueba !== 'Accepted'
  )
    return true;
  return false;
};

const handleStatusService = (servAceptado, statusPrueba) => {
  if (statusPrueba === 'Done')
    return false;
  else if (statusPrueba === 'Accepted' || !servAceptado) return true;
};
const handleStatusServiceProvider = statusPrueba => {
  if (statusPrueba === 'Done') return false;
};

export const ServiceGeneralCard = ({
  servicio,
  botones,
  navigation,
  status,
  data,
  uid,
  statusPrueba,
  providerUid,
  client,
  provider,
}) => {
  const [servAceptado, setServAceptado] = useState(true);
  const [mostrarBotones, setMostrarBotones] = useState(botones);
  data ? data : (data = []);
  const prueba = provider
    ? handleStatusService(servAceptado, statusPrueba)
    : handleStatusServiceProvider(statusPrueba);

  useEffect(() => {
    console.log('servAceptado', servAceptado);
    console.log('mostrarBotones', mostrarBotones);
  }, [servAceptado, mostrarBotones])
  return (
    <ShadowView>
      <GeneralContainer height={'160px'} width={'90%'} marginBottom={'5%'}>
        <GroupRow>
          <GeneralText
            weight
            title={servicio}
            size={'h3'}
            color={'secondary'}
          />
        </GroupRow>
        <GroupColumn>{ServiceCardMapping(data)}</GroupColumn>
        {/* mencionar botones, estrellita de qualify y service status como prop en caso de necesitarlos */}

        {handleStatus(mostrarBotones, statusPrueba) && (
          <AcceptDeclineBtns
            setServAceptado={setServAceptado}
            setMostrarBotones={setMostrarBotones}
            uid={uid}
          />
        )}
        {prueba && <AcceptedService navigation={navigation} uid={uid} />}
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
      </GeneralContainer>
    </ShadowView>
  );
};
