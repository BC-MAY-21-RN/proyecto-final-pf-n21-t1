import React from 'react';
import {ServiceStatus, GeneralContainer, GeneralText} from '../../atoms';
import {AcceptDeclineBtns, QualifyButton} from '../index';
import {GroupRow, GroupColumn, ShadowView, StarAndServiceRow} from './styled';
import ServiceCardMapping from '../../../utils/ServiceCardMapping';
import serviceCardData from './ServiceCardData';

export const ServiceGeneralCard = ({
  servicio,
  botones,
  status,
  qualifyButton,
  navigation,
  /*setShowQualify, */
}) => {
  const serviceText = serviceCardData();
  if (status === 'Servicio Finalizado') {
    qualifyButton = true;
  } else {
    qualifyButton = false;
  }

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
        <GroupColumn>{ServiceCardMapping(serviceText)}</GroupColumn>
        {/* mencionar botones, estrellita de qualify y service status como prop en caso de necesitarlos */}
        {botones ? <AcceptDeclineBtns /> : null}
        <StarAndServiceRow>
          {status ? <ServiceStatus status={status} /> : null}
          {qualifyButton ? <QualifyButton navigation={navigation} /> : null}
        </StarAndServiceRow>
      </GeneralContainer>
    </ShadowView>
  );
};
