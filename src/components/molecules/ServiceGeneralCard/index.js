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

export const ServiceGeneralCard = ({
  servicio,
  botones,
  navigation,
  status,
  data,
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

        {mostrarBotones ? (
          <AcceptDeclineBtns
            setServAceptado={setServAceptado}
            setMostrarBotones={setMostrarBotones}
          />
        ) : null}
        {!servAceptado ? <AcceptedService navigation={navigation} /> : null}

        <StarAndServiceRow>
          {status ? <ServiceStatus status={status} /> : null}
          {qualify(status) ? <QualifyButton navigation={navigation} /> : null}
        </StarAndServiceRow>
      </GeneralContainer>
    </ShadowView>
  );
};
