import React from 'react';
import { ServiceStatus, GeneralContainer, GeneralText } from '../../atoms';
import { AcceptDeclineBtns } from '../index';
import { GroupRow, GroupColumn, ShadowView } from './styled';
import ServiceCardMapping from '../../../utils/ServiceCardMapping';
import serviceCardData from './ServiceCardData';

export const ServiceGeneralCard = ({ servicio, botones, status }) => {
  const serviceText = serviceCardData();
  return (
    <ShadowView>
      <GeneralContainer height={'160px'} width={'90%'} marginBottom={'5%'}>
        <GroupRow>
          <GeneralText
            title={'Servicio:'}
            weight
            size={'h2'}
            color={'secondary'}
          />
          <GeneralText
            weight
            title={servicio}
            size={'h2'}
            color={'secondary'}
          />
        </GroupRow>
        <GroupColumn>{ServiceCardMapping(serviceText)}</GroupColumn>
        {/* mencionar botones como prop en caso de necesitarlos */}
        {botones ? <AcceptDeclineBtns /> : null}
        {status ? <ServiceStatus status={status} /> : null}
      </GeneralContainer>
    </ShadowView>
  );
};
