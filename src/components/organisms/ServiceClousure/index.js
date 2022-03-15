import React, {useState} from 'react';
import {ShadowView} from '../../molecules/ServiceGeneralCard/styled';
import {GeneralContainer, GeneralText} from '../../atoms';
import {Row, Column} from './styled';
import {BackFinishBtns} from '../../molecules';
import {Text} from 'react-native';

export const ServiceClosure = ({servicio, action}) => {
  return (
    <ShadowView>
      <GeneralContainer height={'490px'} width={'90%'} marginBottom={'5%'}>
        <Row>
          <GeneralText
            weight
            title={servicio}
            size={'h3'}
            color={'secondary'}
          />
        </Row>
        <Column>
          <Text>Informacion de firebase</Text>
        </Column>
        <BackFinishBtns action={action} />
      </GeneralContainer>
    </ShadowView>
  );
};
