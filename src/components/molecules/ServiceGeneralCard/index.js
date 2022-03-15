import React, {useState} from 'react';
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
  if (mostrarBotones &&
    statusPrueba !== 'Decline' &&
    statusPrueba !== 'Accepted')
    return true;
  return false;
}

const handleStatusService = (servAceptado, statusPrueba) => {
  if (!servAceptado || statusPrueba === 'Accepted') return true;
  return false
}

export const ServiceGeneralCard = ({
  servicio,
  botones,
  navigation,
  status,
  data,
  uid,
  statusPrueba,
}) => {
  const [servAceptado, setServAceptado] = useState(true);
  const [mostrarBotones, setMostrarBotones] = useState(botones);
  data ? data : (data = []);

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
        {handleStatusService(servAceptado, statusPrueba) && (
          <AcceptedService navigation={navigation} />
        )}
        <StarAndServiceRow>
          {status && <ServiceStatus status={status} />}
          {qualify(status) && <QualifyButton navigation={navigation} />}
        </StarAndServiceRow>
      </GeneralContainer>
    </ShadowView>
  );
};
